import Cookie from 'js-cookie';
import jwt from 'jsonwebtoken';
import fetch from 'isomorphic-unfetch';
import * as settings from '../settings';

//responsbile for handling the token verification and cookie operations

async function getJWK() {
	const res = await fetch(`https://${settings.domain}/.well-known/jwks.json`);
	const jwk = await res.json();
	return jwk;
}

function saveToken(jwtToken, accessToken) {
	Cookie.set('user', jwt.decode(jwtToken));
	Cookie.set('jwtToken', jwtToken);
}

//when we delete token, we also remove the users cookie and remove the jwt token
function deleteToken() {
	Cookie.remove('user');
	Cookie.remove('jwtToken');
}

// verifying the token
// receive JWKS(JSON Web Key set) and extract the key property for JWK
// extract and then decode the JWT(JSON web token) and take the kid property from the header
//compare the kid with the with the kid property from the JWK
// creates a cert based on x5c property from JWK
// checks to see if the created cert matches
// if true it verifies the jwt and returns true
//if not it returns false
async function verifyToken(token) {
	if (token) {
		const decodedToken = jwt.decode(token, { complete: true });
		const jwk = await getJWK();
		let cert = jwk.keys[0].x5c[0];
		console.log('cert', cert);
		cert = cert.match(/.{1,64}/g).join('\n');
		cert = `-----BEGIN CERTIFICATE-----\n${cert}\n-----END CERTIFICATE-----\n`;
		if (jwk.keys[0].kid === decodedToken.header.kid) {
			try {
				jwt.verify(token, cert);
				return true;
			} catch (error) {
				console.error(error);
				return false;
			}
		}
	}
}

// gets a token for browser
// if we receive a valid token we then receive a cookie for the browser
async function getTokenForBrowser() {
	const token = Cookie.getJSON('jwtToken');
	const validToken = await verifyToken(token);
	if (validToken) {
		return Cookie.getJSON('user');
	}
}

//getting a token for the server

async function getTokenForServer(req) {
	if (req.headers.cookie) {
		const jwtFromCookie = req.headers.cookie
			.split(';')
			.find(c => c.trim().startsWith('jwtToken='));
		if (!jwtFromCookie) {
			return undefined;
		}
		const token = jwtFromCookie.split('=')[1];
		const validToken = await verifyToken(token);
		if (validToken) {
			return jwt.decode(token);
		} else {
			return undefined;
		}
	}
}

export {
	saveToken,
	deleteToken,
	getTokenForBrowser,
	getTokenForServer,
	verifyToken
};
