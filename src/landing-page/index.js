import React, { useState } from 'react';

// Components
import Header from '../page-parts/header';
import Body from '../page-parts/body';
import NavBar from '../page-parts/header/nav';
import LoginPage from '../pages/user/loginpage';
import AccountPage from '../pages/account';

// Styles
import './index.scss';

function LandingPage(props) {

	const [logged_in, setLoggedIn] = useState(false);
	const [form, setForm] = useState("");

	return (
		<>
			<Header
				logged_in={logged_in}
				login={setLoggedIn}
			>
				<NavBar
					logged_in={logged_in}
					display_form={setForm} />
			</Header>
			<Body />

			{
				// Pages below
			}
			<LoginPage
				display={form === 'login'}
				display_form={setForm}
				login={setLoggedIn}
			/>
			<AccountPage
				display={form === 'account'}
				display_form={setForm}
			/>
		</>
	)
}

export default LandingPage;