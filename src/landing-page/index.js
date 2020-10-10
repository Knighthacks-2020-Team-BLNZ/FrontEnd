import React from 'react';

// Components
import NavBar from '../nav';

// Styles
import './index.css';

function LandingPage(props) {
	return (
		<>
			<NavBar
				logged_in={false}
				display_form={(string) => {
					return () => {

					}
				}} />
		</>
	)
}

export default LandingPage;