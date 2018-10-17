import React from 'react';
import '../assets/information.css';

import SingleEventComponent from './SingleEventComponent';
import SingleOrganizerComponent from './SingleOrganizerComponent';
const AboutInfoComponent = ({class_name}) => {
	const name = "about-info max-width " + class_name;
	return (
		<div className = {name}>
			<div className = "row">
				<div className = "col-12 col-xs-12 col-sm-12 col-md-9 col-lg-9 container-1">
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
								status = {'Closed'} />
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
								status = {'Completed'} />
						</div>
					</div>
				</div>
				<div className = "col-12 col-xs-12 col-sm-12 col-md-3 col-lg-3 container-2">
					<div className = "title">
						<h3 className = "text-uppercase"> Organizers </h3>
					</div>
					<div className = "organizers-list">
						<SingleOrganizerComponent name = {'Shantanu Dhaka'} position = {'Head Organizer'} />
						<SingleOrganizerComponent name = {'Shantanu Dhaka'} position = {'Head Organizer'} />
						<SingleOrganizerComponent name = {'Siva S'} position = {'Organizer'} />
						<SingleOrganizerComponent name = {'Stephen Amritraj'} position = {'Organizer'} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutInfoComponent;