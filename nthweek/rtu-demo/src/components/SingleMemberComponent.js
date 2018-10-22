import React, {Fragment} from 'react';

import '../assets/singlemember.css';
import profileLogo from '../assets/profile-logo.svg';
const SingleMemberComponent = ({name, gender, city, rating, displayChecked, date, status, leftBorder, dividedName, dividedNameM}) => {
	const class_name = "fa fa-check-circle align-items-center " + displayChecked;
	const para_string = gender + ' • ' + city;
	const border_class_name = "single-member d-none d-md-flex " + leftBorder;
	const sm_class_name = "single-member-sm d-flex d-md-none flex-column " + leftBorder;
	return (
		<Fragment>
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
			<div className = {sm_class_name}>
				<div className = "top-height row">
					<div className = "col-8">
						<div className = "text-adjust d-flex flex-column">
							<div className = "header-adjust d-flex justify-content-start align-items-center" style = {{flex: '2'}}>
								<div className = "title">
									<span className = "span-adjust"> {dividedName} </span>
									{dividedNameM}
								</div>
								<div className = "status-sm d-flex align-items-center">
									<h4> {status} </h4>
								</div>
							</div>
							<div className = "city-adjust" style = {{flex: '1'}}>
								<p> {para_string} </p>
							</div>
						</div>
					</div>
					<div className = "col-4">
						<div className = "d-flex justify-content-center align-items-center image-adjust">
							<img src = {profileLogo} />
						</div>
					</div>
				</div>
				<div className = "bottom-height">
					<div className = "d-flex flex-column justify-content-start align-items-start">
						<div>
							<h4> UTR (P) • </h4>
							<div className = "d-flex flex-row">
								<h3> {rating} </h3>
								<i className = {class_name} className = {"fa fa-check-circle align-items-start " + displayChecked} style = {{fontSize: '12px', color: '#00BAB6', marginLeft: '3px', marginTop: '3px'}}></i>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default SingleMemberComponent;