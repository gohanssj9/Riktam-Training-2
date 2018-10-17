import React from 'react';

import '../assets/singleorganizer.css';
import profileLogo from '../assets/profile-logo.svg';
const SingleOrganizerComponent = ({name, position}) => {
	return (
		<div className = "single-organizer d-flex">
			<div className = "organizer-image d-flex">
				<img src = {profileLogo} />
			</div>
			<div className = "organizer-details d-flex">
				<div>
					<h4> {name} </h4>
					<p className = "text-uppercase"> {position} </p>
				</div>
			</div>
		</div>
	);
}

export default SingleOrganizerComponent;