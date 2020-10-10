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
						props.display_form("")
					}}>
						<label>Name:</label>
						<input type="text" name="name" value="John Doe" />
						<label>Myers Briggs:</label>
						<input type="text" name="myers-briggs" value="ISTJ" />
						<label>Short Description of yourself:</label>
						<textarea>
							I like being active and being the leader in a team. I love programming and taking things step by step.
						</textarea>
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