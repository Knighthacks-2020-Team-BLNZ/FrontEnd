import React from 'react';

// Components
import Title from './title';
import Logout from './logout';

// Styles
import './index.scss';

function Header(props) {
	return (
		<div id="header">
			{props.children}
			<Title />
			<Logout />
		</div>
	)
}

export default Header;