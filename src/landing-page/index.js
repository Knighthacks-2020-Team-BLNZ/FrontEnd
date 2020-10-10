import React from 'react';

// Components
import Header from '../page-parts/header';
import Body from '../page-parts/body';
import NavBar from '../page-parts/header/nav';

// Styles
import './index.scss';

function LandingPage(props) {
	return (
		<>
			<Header>
				<NavBar
					logged_in={true}
					display_form={(string) => {
						return () => {
							console.log("Hi")
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
		</>
	)
}

export default LandingPage;