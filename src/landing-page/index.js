import React from 'react';

// Components
import NavBar from '../page-parts/nav';

// Styles
import './index.css';

function LandingPage(props) {
	return (
		<>
			<Header>
				<NavBar
					logged_in={false}
					display_form={(string) => {
						return () => {

						}
					}} />
			</Header>
		</>
	)
}

export default LandingPage;