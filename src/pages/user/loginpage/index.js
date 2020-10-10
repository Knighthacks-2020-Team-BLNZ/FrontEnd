import React from 'react';

// Styles
import './index.scss';

function LoginPage(props) {

	return (
		<>
			<div id="login-page-container" className={props.display ? "display" : ""}>
				<div id="login-page">
					<h1>Login</h1>
					<form id="login-form" onSubmit={(event) => {
						event.preventDefault();
						props.login(true)
						props.display_form("")
					}}>
						<label>Username:</label>
						<input type="text" name="name" placeholder="Username" />
						<label>Password:</label>
						<input type="password" name="password" placeholder="Password" />
						<input type="submit" value="Login" />
						<div>
							Not registered? <span className="click-here-prompt" onClick={() => {
								props.display_form("register")
							}}>
								Click here
							</span>
						</div>
					</form>
					<div className="close_btn" onClick={() => {
						props.display_form("")
					}}>
						X
					</div>
				</div>
			</div>
		</>
	)
}

export default LoginPage;