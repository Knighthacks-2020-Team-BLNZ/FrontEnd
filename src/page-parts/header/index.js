import React from 'react';

// Styles
import './index.scss';

function Header(props) {
	return (
		<div id="header">
			{props.children}
		</div>
	)
}

export default Header;