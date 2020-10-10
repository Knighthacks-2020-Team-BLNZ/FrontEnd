import React from 'react';

// Styles
import './index.scss';

function AccountPage(props) {

	return (
		<>
			<div id="account-page-container" className={props.display ? "display" : ""}>
				<div id="account-page">
					<h1>Account</h1>
					<form id="account-form" onSubmit={(event) => {
						event.preventDefault();
					}}>
						<label>info 1?:</label>
						<input type="text" name="name" placeholder="Name" />
						<label>Myers Briggs:</label>
						<input type="text" name="myers-briggs" />
						<label>Short Description of yourself:</label>
						<textarea></textarea>
						<input type="submit" value="Update" />
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

export default AccountPage;