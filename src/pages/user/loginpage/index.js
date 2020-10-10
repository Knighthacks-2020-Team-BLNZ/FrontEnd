import React from 'react';

// Styles
import './index.scss';

function LoginPage(props) {
	console.log(props.display_form)
	return (
		<>
			<div id="login-page-container" className={props.display ? "display" : ""}>
				<div id="login-page">
					<h1>Login</h1>
					<form id="login-form">
						<label>Username:</label>
						<input type="text" name="name" placeholder="Username" />
						<label>Password:</label>
						<input type="password" name="password" placeholder="Password" />
						<input type="submit" value="Login" />
						<div>
							Not registered? <span>
								Click here
							</span>
						</div>
					</form>
					<div className="close_btn" onClick={(
						props.display_form("register")
					)}>
						X
					</div>
				</div>
			</div>
		</>
	)
}

export default LoginPage;