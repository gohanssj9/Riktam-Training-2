import React from 'react';

import '../assets/university.css';
const UniversityComponent = () => {
	return (
		<div className = "university-details max-width">
			<div className = "container">
				<div className = "row justify-content-end pr-4">
					<i className = "fa fa-share" style = {{color: '#a2a2a2'}}></i>
					<h4 style = {{fontFamily: 'Arial', fontSize: '14px', color: '#525252'}} className = 'pl-1 pr-1'> Share </h4>
				</div>
				<div className = "row">
					<div className = "col-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 university-title">
						<div>
							<h1 className = "display-1 text-uppercase"> University of Shantanu </h1>
							<span className = "display-1 text-uppercase"> Dhaka </span>
						</div>

						<div className = "details row pt-2">
							<div className = "col-6 col-xs-6 col-sm-6 col-md-3 col-lg-2 text-image d-flex align-items-center">
								<i className = "fa fa-map-marker" style = {{fontSize: '24px', color: '#a2a2a2'}}></i>
								<h4 className = "pt-2 pl-2 text-uppercase"> Cambridge, MA </h4>
							</div>
							<div className = "col-6 col-xs-6 col-sm-6 col-md-3 col-lg-2 text-image d-flex align-items-center">
								<i className = "fa fa-users" style = {{fontSize: '24px', color: '#a2a2a2'}}></i>
								<h4 className = "pt-2 pl-2 text-uppercase"> 5 Members </h4>
							</div>
							<div className = "col-6 col-xs-6 col-sm-6 col-md-3 col-lg-2 text-image d-flex align-items-center">
								<i className = "fa fa-calendar" style = {{fontSize: '24px', color: '#a2a2a2'}}></i>
								<h4 className = "pt-2 pl-2 text-uppercase"> 2 Events </h4>
							</div>
							<div className = "col-12 col-xs-12 col-sm-12 col-md-3 col-lg-4 ml-auto pr-4">
								<div className = "inner-button">
									<button type = "button" className = "text-uppercase button-style"> Request to Join </button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default UniversityComponent;