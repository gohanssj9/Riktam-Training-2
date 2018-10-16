import React, {Component, Fragment} from 'react';
import '../assets/header.css';

import innerLogo from '../assets/inner-logo.svg';
import profileLogo from '../assets/profile-logo.svg';

const Header = () => {
	return (
		<div className = "navbar-wrapper">
			<nav className = "navbar navbar-default navbar-expand-sm max-width">
				<div className = "container-fluid d-flex flex-wrap flex-sm-wrap flex-md-wrap flex-lg-nowrap">
					<div className = "navbar-header">
						<a className = "navbar-brand" href = "#">
							<img src = {innerLogo} />
						</a>

						<div className = "search-bar">
							<div className = "search-icon">
								<i className="fa fa-search" style = {{color: '#d2d2d2'}}></i>
							</div>
							<div className = "search-content">
								<input type = "text" placeholder = "Search players, events, clubs, schools" />
							</div>
						</div>
					</div>

					<div className = "enclosing-right d-none d-lg-block">
						<ul className = "nav navbar-nav navbar-right">
							<li>Home</li>
							<li>Events</li>
							<li>Inbox</li>
							<li>
								<a href = "#">
									<img src = {profileLogo} />
									<i className="fa fa-caret-down" style = {{color: '#c2c2c2', paddingLeft: '3px'}}></i>
								</a>
							</li>
							<li>
								<a href="#" style = {{fontSize: '36px'}}>
          				<i className="fa fa-plus-circle" style = {{color: '#00BAB6'}}></i>
        				</a>
        		</li>
						</ul>
					</div>

					<div className = "enclosing-right-small d-flex d-lg-none">
						<div className = "text-icon">
							<i class="fa fa-home" style = {{fontSize: '36px'}}></i>
							<p> Home </p>
						</div>
						<div className = "text-icon">
							<i class="fa fa-play" style = {{fontSize: '36px'}}></i>
							<p> Play </p>
						</div>
						<div className = "text-icon">
							<i class="fa fa-plus-circle" style = {{fontSize: '36px'}}></i>
							<p> Menu </p>
						</div>
						<div className = "text-icon">
							<i class="fa fa-inbox" style = {{fontSize: '36px'}}></i>
							<p> Inbox </p>
						</div>
						<div className = "text-icon">
							<i class="fa fa-calendar" style = {{fontSize: '36px'}}></i>
							<p> Events </p>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Header;