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
			<li id="nav__account" {...props.handle_account}>
				Account
				<div id="nav__account__dropdown">
					<ul>
						<li>
							Settings
						</li>
						<li>
							Tutors?
						</li>
					</ul>
				</div>
			</li>
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
				props.display_form('register')
			)}>
				Register
            </li>
		</>
	)
}

export default Nav;