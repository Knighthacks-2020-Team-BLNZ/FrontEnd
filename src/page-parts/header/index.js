import React from 'react';

// Components
import Title from './title';

// Styles
import './index.scss';

function Header(props) {
	return (
		<div id="header">
			{props.children}
			<Title />
		</div>
	)
}

export default Header;