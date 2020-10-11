import React, { useState } from 'react';

// Profile Pics
import Guy1 from './guy1.jpg';

// Styles
import './index.scss';

function AccountPage(props) {

	const [tutor, setTutor] = useState(0);

	let names = ["John Doe", "Zackary Santana"];
	let descriptions = [
		"Hi my name is ... isngiujfndaijgnfdijgndfjngijdfsnbgjhdfnsgj John Doe :)",
		"This is Zackary's biofoisdnfguijnasdiguojndfesuoignsdfgnfsdngidfsnoignsdfignifsdngiosdfngi"
	]

	return (
		<>
			<div id="tutormatch-page-container" className={props.display ? "display" : ""}>
				<div id="tutormatch-page">
					<h1>Tutor Matching</h1>
					<div id="tutormatch__dividor">
						<form id="tutormatch-form" onSubmit={(event) => {
							event.preventDefault();
							props.display_form("")
						}}>
							<label>Subject:</label>
							<div className="select-div">
								<label>
									<select id="cars" name="cars">
										<option value="Physics">Physics</option>
										<option value="Math">Math</option>
										<option value="English">English</option>
										<option value="Biology">Biology</option>
										<option value="Chemistry">Chemistry</option>
									</select>
								</label>
							</div>
							<input type="submit" value="Match" onClick={(event) => {
								// TODO: Make call here
								event.preventDefault();
								setTutor(1)
							}} />
							<p>
								Your top matches according to the subject you input will be ranked and shown to the side!
							</p>
						</form>
						<hr style={{ margin: "0" }} />
						{tutor > 0 &&
							<div id="tutor-info">
								<h1 id="tutor-name">
									{names[tutor - 1]}
								</h1>
								<img src={Guy1} alt="Avatar" className="avatar" />
								<div id="tutor-description">
									<p>
										{descriptions[tutor - 1]}
									</p>
								</div>
								<div id="tutor-buttons">
									<button styles={{ cursor: "copy" }} onClick={() => { navigator.clipboard.writeText("Email here") }}>
										Contact
									</button>
									<div id="tutor-navigation">
										<button disabled={tutor === 1} onClick={() => setTutor(tutor - 1)}>
											Back
										</button>
										<button disabled={tutor === names.length} onClick={() => setTutor(tutor + 1)}>
											Next
										</button>
									</div>
								</div>
							</div>
						}
						{tutor === 0 &&
							<div id="tutor-info">
								<h1>Select a catagory and click match</h1>
							</div>
						}
					</div>
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