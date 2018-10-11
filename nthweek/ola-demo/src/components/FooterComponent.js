import React from 'react';
import '../assets/footer.css';
import '../assets/main-body-top.css';

import RoutesSingleComponent from './RoutesSingleComponent';

const firstSetOfData = [
	{
		title: 'Northern India',
		bodyStart: ['Delhi', 'Delhi', 'Delhi', 'Delhi', 'Delhi', 'Jaipur'],
		bodyEnd: ['Chandigarh', 'Agra', 'Jaipur', 'Shimla', 'Nainital', 'Delhi']
	},
	{
		title: 'Southern India',
		bodyStart: ['Chennai', 'Chennai', 'Chennai', 'Hyderabad', 'Hyderabad', 'Hyderabad'],
		bodyEnd: ['Pondicherry', 'Tirupati', 'Vellore', 'Vijayawada', 'Warangal', 'Tirupati']
	},
	{
		title: 'East & West India',
		bodyStart: ['Mumbai', 'Mumbai', 'Mumbai', 'Mumbai', 'Mumbai', 'Mumbai'],
		bodyEnd: ['Pune', 'Mahabaleshwar', 'Lonavala', 'Nashik', 'Matheran', 'Shirdi']
	}
];

const FooterComponent = () => {
	return (
		<footer className = "ola-footer">
			<div className = "max-width">
				<div className = "footer">
					<div className = "row main-links top-cities">
						<div className = "col-12 col-sm-12 col-md-3 col-lg-3 title"> Top Visited Cities </div>
					</div>
					<div className = "row lists">
						<div className = "col-12 col-sm-12 col-md-3 col-lg-3 title"> Popular Outstation Routes </div>
						<div className = "border-bottom">
							<RoutesSingleComponent data = {firstSetOfData[0]} />
							<RoutesSingleComponent data = {firstSetOfData[1]}/>
							<RoutesSingleComponent data = {firstSetOfData[2]}/>
						</div>
					</div>

					<div className = "row social-media">
						<div className = "col-12 col-sm-12 col-md-3 col-lg-3 title"> Social Links </div>
							<div className = "dummyClass">
							<img src = {`https://olacabs.com/webstatic/img/footer/fb-footer-icon.svg`} className = "col-2 col-sm-2 col-md-2 col-lg-2" />
							<img src = {`https://olacabs.com/webstatic/img/footer/insta-footer-icon.svg`} className = "col-2 col-sm-2 col-md-2 col-lg-2" />
							<img src = {`https://olacabs.com/webstatic/img/footer/youtube-footer-icon.svg`} className = "col-2 col-sm-2 col-md-2 col-lg-2" />
							<img src = {`https://olacabs.com/webstatic/img/footer/twitter-footer-icon.svg`} className = "col-2 col-sm-2 col-md-2 col-lg-2" />
							</div>
							<div className = "pull-right">
								<select>
									<option value = "India"> India </option>
									<option value = "Australia"> Australia </option>
									<option value = "The Great Britain"> The Great Britain </option>
								</select>
							</div>
					</div>

					<div className = "row main-links">
						<div className = "col-12 col-sm-12 col-md-3 col-lg-3 title discoverOla"> Discover Ola </div>
						<div className = "dummyClass flexy">
							<div className = "col-4 col-sm-4 col-md-1 col-lg-1 pull-left"> About Ola </div>
							<div className = "col-4 col-sm-4 col-md-1 col-lg-1 pull-left"> Careers </div>
							<div className = "col-4 col-sm-4 col-md-1 col-lg-1 pull-left"> Offers </div>
							<div className = "col-6 col-sm-6 col-md-1 col-lg-1 pull-left"> Contact Us </div>
							<div className = "col-6 col-sm-6 col-md-1 col-lg-1 pull-left"> Media Center </div>

							<div className = "col-6 col-sm-6 col-md-2 col-lg-2 pull-right"> Book a Ride </div>
							<div className = "col-6 col-sm-6 col-md-2 col-lg-2 pull-right last"> Become a driver </div>
						</div>
					</div>

					<div className = "row under-cover">
						<img src ={`https://olacabs.com/webstatic/img/footer-ola-logo.svg`} className = "col-12 col-sm-12 col-md-3 col-lg-3 pull-left" />
						<div className = "dummyClass-2">
							<div className = "col-4 col-sm-4 col-md-3 col-lg-3 pull-right"> Privacy Policy </div>
							<div className = "col-4 col-sm-4 col-md-3 col-lg-3 pull-right"> Terms and Conditions </div>
							<div className = "col-4 col-sm-4 col-md-3 col-lg-3 pull-right"> Notices </div>
						</div>
						<div className = "col-12 col-sm-12 col-md-12 col-lg-12 copyrights"> Copyright © 2018 ANI Technologies Pvt. Ltd. All rights reserved. </div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default FooterComponent;