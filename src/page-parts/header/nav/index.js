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
			<li id="nav__account" className="selectable" {...props.handle_account}>
				Account
			</li>
			<li id="nav__tutors" onClick={props.handle_logout}>
				<p className="ignore">Tutors</p>
				<div id="nav__tutors__dropdown">
					<ul>
						<li className="selectable">
							Match
						</li>
						<li className="selectable">
							Give Ratings
						</li>
					</ul>
				</div>
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