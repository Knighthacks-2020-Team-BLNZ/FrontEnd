import React, { useState } from 'react';

// Components
import Header from '../page-parts/header';
import Body from '../page-parts/body';
import NavBar from '../page-parts/header/nav';
import LoginPage from '../pages/user/loginpage';

// Styles
import './index.scss';

function LandingPage(props) {

	let logged_in = false;
	let current_form = "";
	const [form, setForm] = useState("");

	return (
		<>
			<Header
				logged_in={logged_in}>
				<NavBar
					logged_in={logged_in}
					display_form={(new_form) => {
						return () => {
							setForm(new_form);
							console.log(form + "::")
						}
					}}
					handle_account={{}
						// TODO: All account drop down and stuff
					}
					handle_logout={() => {
						// TODO: LOGOUT CODE
					}} />
			</Header>
			<Body />

			{
				// Pages below
			}
			<LoginPage display={form === 'login'} />
		</>
	)
}

export default LandingPage;