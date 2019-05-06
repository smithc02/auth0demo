import Link from 'next/link';
import PropTypes from 'prop-types';
import './header.css';

// just a component that is used throughout the application with generalized styling and layout
// the view is based on a isLoggedIn property



const Header = ({ isLoggedIn }) =>
	<div>
		<nav>
			<ul>
				<li>
					<Link href="/">
						<a>Home</a>
					</Link>
				</li>
				<li>
					<Link href="/public">
						<a>Public</a>
					</Link>
				</li>
				{isLoggedIn
					? <li>
							<Link href="/secret">
								<a>Secret</a>
							</Link>
						</li>
					: <li>
							<Link href="/login">
								<a>Login</a>
							</Link>
						</li>}
				{isLoggedIn
					? <li>
							<Link href="/logout">
								<a>Logout</a>
							</Link>
						</li>
					: ''}
			</ul>
		</nav>
		<h1>Auth0 & Next.js</h1>
	</div>;

Header.propTypes = {
	isLoggedIn: PropTypes.bool
};

export default Header;
