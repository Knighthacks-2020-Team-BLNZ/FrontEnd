import React from 'react';

// Styles
import './index.scss';

function LoginPage(props) {
	console.log(props.display)
	return (
		<>
			<div id="login-page-container" className={props.display ? "display" : ""} onClick={(event) => {
				event.preventDefault();
				console.log(event.currentTarget)
			}}>
				<div id="login-page">
					<h1>Login</h1>
					<form id="login-form">
						<label>Username:</label>
						<input type="text" name="name" placeholder="Username" />
						<label>Password:</label>
						<input type="password" name="password" placeholder="Password" />
						<input type="submit" value="Login" />
					</form>
				</div>
			</div>
		</>
	)
}

export default LoginPage;