import React from 'react';

// Styles
import './index.scss';

function Body(props) {
	return (
		<>
			<div id="body-container">
				<div id="body">
					<h1>A Smart Tutor Matching Service</h1>
					<hr />
					<div id="body__text">
						<h2>Mission Statement</h2>
						<ul><li>
						Relearn is designed with users in mind to help their tutoring experience. 
						Whenever learning a new topic it can be just as hard to learn the teaching style of the person conducting the course. 
						We wanted to help students find the best tutors who not only know the material, but how to connect with the student to better learn the material.
						</li></ul>

						<h2>Personality Matching</h2>
						<ul><li>
						With our personality matching algorithm combined with a machine learning model trained for semantic analysis, we are able to perfectly match the tutor 
						to your personality. This gives a much higher chance at not only connecting with the tutor, but to improve the way you would learn the material!
						</li></ul>

						<h2>Real Time Comparisons</h2>
						<ul><li>
						With our machine learning methods, we can compare your personality to other tutors in real time! This helps connect to a tutor as soon as they become available.
						</li></ul>
						
					</div>
				</div>
			</div>
		</>
	)
}

export default Body;