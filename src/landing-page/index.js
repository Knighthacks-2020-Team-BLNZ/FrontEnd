import React from 'react';

// Components
import Header from '../page-parts/header';
import NavBar from '../page-parts/header/nav';

// Styles
import './index.scss';

function LandingPage(props) {
	return (
		<>
			<Header>
				<NavBar
					logged_in={false}
					display_form={(string) => {
						return () => {
							console.log("Hi")
						}
					}} />
			</Header>
		</>
	)
}

export default LandingPage;