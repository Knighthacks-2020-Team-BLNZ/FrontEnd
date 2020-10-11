import React from 'react';

// Styles
import './index.scss';

function AccountPage(props) {

	return (
		<>
			<div id="tutormatch-page-container" className={props.display ? "display" : ""}>
				<div id="tutormatch-page">
					<h1>Tutor Matching</h1>
					<form id="tutormatch-form" onSubmit={(event) => {
						event.preventDefault();
						props.display_form("")
					}}>
						<label>Name:</label>
						<input type="text" name="name" defaultValue="John Doe" />
						<label>Myers Briggs:</label>
						<input type="text" name="myers-briggs" defaultValue="ISTJ" />
						<label>Short Description of yourself:</label>
						<textarea defaultValue="I like being active and being the leader in a team. I love programming and taking things step by step." />
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