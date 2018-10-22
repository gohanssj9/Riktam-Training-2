import React from 'react';

import '../assets/singlemember.css';

const SingleMemberComponent = ({name, gender, city, rating, displayChecked, date, status, leftBorder}) => {
	const class_name = "fa fa-check-circle align-items-center " + displayChecked;
	const para_string = gender + ' • ' + city;
	const border_class_name = "single-member d-flex " + leftBorder;
	return (
		<div className = {border_class_name}>
			<div className = "d-flex player-name justify-content-start align-items-center">
				<div className = "name">
					<h4> {name} </h4>
					<p> {para_string} </p>
				</div>
			</div>
			<div className = "player-rating d-flex justify-content-start align-items-center">
				<div className = "player-rating-holder">
					<div className = "header-holder d-flex flex-row">
						<h4> {rating} </h4>
						<i className = {class_name} style = {{fontSize: '12px', color: '#00BAB6'}}></i>
					</div>
					<p className = "text-uppercase"> UTR (P) • </p> 
				</div>
			</div>
			<div className = "joining-date d-flex justify-content-start align-items-center">
				<h4> {date} </h4>
			</div>
			<div className = "status d-flex justify-content-start align-items-center">
				<h4> {status} </h4>
			</div>
		</div>
	);
}

export default SingleMemberComponent;