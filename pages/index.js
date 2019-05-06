import PropTypes from 'prop-types';
import template from '../static/template';
// import styled from 'styled-components';

const Index = ({ isLoggedIn }) =>
	<div>
		Caleb's first Auth0/Next.js React Demo
		{!isLoggedIn && <p>You're not logged in yet</p>}
	</div>;

Index.propTypes = {
	isLoggedIn: PropTypes.bool
};

export default template(Index);
