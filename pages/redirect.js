import React from 'react';
import Router from 'next/router';
import { parseHash } from '../static/auth0';
import { saveToken, verifyToken } from '../static/auth';

//redirects us to our callback URL, if we have a successfull login we are redirected back to the localhost:3000 however now with a isLoggedIn: true status

export default class extends React.Component {
	componentDidMount() {
		parseHash((err, result) => {
			if (err) {
				console.error('Error signing in', err);
				return;
			}
			verifyToken(result.idToken).then(valid => {
				if (valid) {
					saveToken(result.idToken, result.accessToken);
					Router.push('/');
				} else {
					Router.push('/');
				}
			});
		});
	}
	render() {
		return null;
	}
}
