import React from 'react';

// Styling
import './index.scss';

function Nav(props) {
	const LoggedIn = <LoggedInNav {...props} />;
	const LoggedOut = <LoggedOutNav {...props} />;

	return (
		<ul id="navbar">
			{props.logged_in ? LoggedIn : LoggedOut}
		</ul>
	)
}

function LoggedInNav(props) {
	return (
		<>
			<li onClick={props.handle_logout}>
				Logout
			</li>
		</>
	);
}

function LoggedOutNav(props) {
	return (
		<>
			<li onClick={(
				props.display_form('login')
			)}>
				Login
            </li>
			<li onClick={(
				props.display_form('Register')
			)}>
				Register
            </li>
		</>
	)
}

export default Nav;