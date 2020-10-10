import React from 'react';

// Styling
import './index.css';

function Nav(props) {
	const LoggedIn = <LoggedInNav {...props} />;
	const LoggedOut = <LoggedOutNav {...props} />;

	return (
		<>
			{props.logged_in ? LoggedIn : LoggedOut}
		</>
	)
}

function LoggedInNav(props) {
	return (
		<ul>
			<li onClick={props.handle_logout}>
				Logout
            </li>
		</ul>
	);
}

function LoggedOutNav(props) {
	return (
		<ul>
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
		</ul>
	)
}

export default Nav;