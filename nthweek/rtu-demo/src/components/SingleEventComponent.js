import React from 'react';
import '../assets/singleevent.css';

import defaultIcon from '../assets/default-icon.svg';

const SingleEventComponent = ({title, subtitle, date, colorBorder, colorStatus, status}) => {
	const class_name = "single-event d-flex " + colorBorder + "hide-xs";
	const event_name = "border-color d-flex " + colorStatus;
	return (
		<div className = {class_name}>
			<div className = "event-image d-flex">
				<img src = {defaultIcon} />
			</div>
			<div className = "event-details d-flex">
				<div>
					<h4> {title} </h4>
					<p> {subtitle} </p>
				</div>
			</div>
			<div className = "event-dates d-flex">
				<h4> {date} </h4>
			</div>
			<div className = "event-status d-flex">
				<div className = {event_name}>
					<div>
						<h4> {status} </h4>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SingleEventComponent;