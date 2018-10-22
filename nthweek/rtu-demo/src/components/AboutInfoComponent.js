import React from 'react';
import '../assets/information.css';
import mapImage from '../assets/map-image.png';

import SingleEventComponent from './SingleEventComponent';
import SingleOrganizerComponent from './SingleOrganizerComponent';
const AboutInfoComponent = ({class_name}) => {
	const name = "about-info max-width " + class_name + ' flex-column';
	return (
		<div className = {name}>
			<div className = "row">
				<div className = "col-12 col-xs-12 col-sm-12 col-md-8 col-lg-8 container-1">
					<div className = "title">
						<h3 className = "text-uppercase"> About the University of Shantanu Dhaka </h3>
						<h4 className = "h4"> 20+ outdoor hard courts for a lot of fun tennis. Woohoo! </h4>
					</div>

					<div className = "upcoming-events">
						<div className = "title">
							<h3 className = "text-uppercase"> Upcoming Events </h3>
							<SingleEventComponent 
								title = {'Our Palo Alto tournament'} 
								subtitle = {'Palo Alto, CA'} 
								date = {'Nov 22 - Dec 1'}
								colorBorder = {'yellow-border-left'}
								colorStatus = {'yellow-border'}
								status = {'Closed'}
								separateMonth = {'Nov - Dec'}
								separateDate = {'22 - 1'} />
						</div>
					</div>

					<div className = "upcoming-events">
						<div className = "title">
							<h3 className = "text-uppercase"> Recent Events </h3>
							<SingleEventComponent 
								title = {'Test tournament'} 
								subtitle = {'San Francisco, CA'} 
								date = {'Aug 10'}
								colorBorder = {'grey-border-left'}
								colorStatus = {'grey-border'}
								status = {'Completed'}
								separateMonth = {'Oct'}
								separateDate = {'17'} />
						</div>
					</div>
				</div>
				<div className = "col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4 container-2">
					<div className = "title">
						<h3 className = "text-uppercase"> Organizers </h3>
					</div>
					<div className = "organizers-list">
						<SingleOrganizerComponent name = {'Shantanu Dhaka'} position = {'Head Organizer'} />
						<SingleOrganizerComponent name = {'Shantanu Dhaka'} position = {'Head Organizer'} />
						<SingleOrganizerComponent name = {'Siva S'} position = {'Organizer'} />
						<SingleOrganizerComponent name = {'Stephen Amritraj'} position = {'Organizer'} />
					</div>
					<div className = "location-details">
						<div className = "title">
							<h3 className = "text-uppercase"> Location </h3>
						</div>
						<div className = "inner-div">
							<div className = "inner-div-location-text">
								<div className = "university-location d-flex flex-row">
									<i className = "fa fa-map-marker d-flex justify-content-start align-items-start" style = {{flex: '1', color: '#858585'}}></i>
									<div className = "text-holder flex-column d-flex justify-content-start align-items-start" style = {{flex: '9'}}>
										<h3> University of Shantanu Dhaka </h3>
										<h3> Cambridge, MA </h3>
									</div>
								</div>
								<div className = "get-directions d-flex">
									<i className = "fa fa-share-square d-flex justify-content-center align-items-center" style = {{flex: '1'}}></i>
									<h3 className = "d-flex justify-content-start align-items-center" style = {{flex: '9'}}> Get directions </h3>
								</div>
							</div>
							<div className = "map-image">
								<img src = {mapImage} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutInfoComponent;