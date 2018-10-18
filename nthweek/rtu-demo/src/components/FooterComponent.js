import React from 'react';

import '../assets/footer.css';
import footerLogo from '../assets/footer-logo.svg';

const FooterComponent = () => {
	return (
		<footer>
			<div className = "container">
				<div className = "holder max-width row">
					<div className = "rtu-logo col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4 d-none d-md-block">
						<div className = "img-holder d-flex justify-content-center align-items-center">
							<img src = {footerLogo} />
						</div>
					</div>
					<div className = "rtu-logo col-4 col-xs-4 col-sm-4 col-md-4 col-lg-4">
						<div className = "social-holder d-flex flex-row justify-content-center align-items-center">
							<div className = "social">
								<i className = "fa fa-facebook-square" style = {{color: '#858585', fontSize: '20px'}}></i>
							</div>
							<div className = "social">
								<i className = "fa fa-instagram" style = {{color: '#858585', fontSize: '20px'}}></i>
							</div>
							<div className = "social">
								<i className = "fa fa-twitter-square" style = {{color: '#858585', fontSize: '20px'}}></i>
							</div>
						</div>
					</div>
					<div className = "rtu-logo col-8 col-xs-8 col-sm-8 col-md-4 col-lg-4">
						<div className = "detail-holder d-flex flex-row justify-content-center align-items-center">
							<h3 className = "text-uppercase detail">Contact</h3>
							<h3 className = "text-uppercase detail">Events</h3>
							<h3 className = "text-uppercase detail">Terms</h3>
						</div>						
					</div>
				</div>
			</div>
		</footer>
	);
}

export default FooterComponent;