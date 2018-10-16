import React, {Component, Fragment} from 'react';
import '../assets/header.css';

import innerLogo from '../assets/inner-logo.svg';
import profileLogo from '../assets/profile-logo.svg';

const Header = () => {
	return (
		<div className = "navbar-wrapper">
			<nav className = "navbar navbar-default max-width">
				<div className = "container-fluid">
					<div className = "navbar-header">
						<a className = "navbar-brand" href = "#">
							<img src = {innerLogo} />
						</a>
					</div>
					<div>
						<ul className = "nav navbar-nav navbar-right">
							<li><a href = "#">Home</a></li>
							<li><a href = "#">Events</a></li>
							<li><a href = "#">Inbox</a></li>
							<li><a href = "#"><img src = {profileLogo} /></a></li>
							<li>
								<a href="#" style = {{fontSize: '36px'}}>
          				<span className="glyphicon glyphicon-plus-sign" style = {{color: '#00ff00'}}></span>
        				</a>
        		</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Header;