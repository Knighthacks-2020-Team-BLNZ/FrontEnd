import React from 'react';

// Styles
import './index.scss';

function LoginPage() {
	return (
		<>
			<div id="login-page-container">
				<div id="login-page">
					<h1>Login</h1>
					<form id="login-form">
						<label>Username:</label>
						<input type="text" name="name" />
						<input type="submit" value="Submit" />
					</form>
				</div>
			</div>
		</>
	)
}

export default LoginPage;