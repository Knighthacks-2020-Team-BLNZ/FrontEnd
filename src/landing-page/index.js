import React, { useState } from 'react';

// Components
import Header from '../page-parts/header';
import Body from '../page-parts/body';
import NavBar from '../page-parts/header/nav';
import LoginPage from '../pages/user/loginpage';

// Styles
import './index.scss';

function LandingPage(props) {

	const [logged_in, setLoggedIn] = useState(false);
	const [form, setForm] = useState("");
	const changeForm = (new_form) => {
		return () => {
			setForm(new_form);
		}
	};

	return (
		<>
			<Header
				logged_in={logged_in}
				login={setLoggedIn}
			>
				<NavBar
					logged_in={logged_in}
					display_form={changeForm}
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
			<LoginPage
				display={form === 'login'}
				display_form={changeForm}
				login={setLoggedIn}
			/>
		</>
	)
}

export default LandingPage;