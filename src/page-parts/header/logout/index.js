import React from 'react';

// Styles
import './index.scss';

function Logout(props) {
	if (props.logged_in) {
		return (
			<div id="logout">
				<p className="logout__text selectable">Logout</p>
			</div>
		)
	} else {
		return (
			<>
			</>
		)
	}
}

export default Logout;