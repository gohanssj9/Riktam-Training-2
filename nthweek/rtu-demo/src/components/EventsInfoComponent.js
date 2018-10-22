import React from 'react';

import SingleEventComponent from './SingleEventComponent';
import '../assets/information.css';

const EventsInfoComponent = ({class_name}) => {
	const name = "events-info max-width " + class_name;
	return (
		<div className = {name}>
			<div className = "row">
				<div className = "col-12 upcoming-events">
					<div className = "title">
						<h3 className = "text-uppercase"> Upcoming Events </h3>
						<SingleEventComponent 
							title = {'Our Palo Alto tournament'} 
							subtitle = {'Palo Alto, CA'} 
							date = {'Nov 22 - Dec 1'}
							colorBorder = {'cyan-border-left'}
							colorStatus = {'cyan-border'}
							status = {'Open'} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default EventsInfoComponent;