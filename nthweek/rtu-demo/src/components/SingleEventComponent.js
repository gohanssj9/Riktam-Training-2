import React, {Fragment} from 'react';
import '../assets/singleevent.css';

import defaultIcon from '../assets/default-icon.svg';

const SingleEventComponent = ({title, subtitle, date, colorBorder, colorStatus, status, separateMonth, separateDate}) => {
	const class_name = "single-event d-md-flex d-none " + colorBorder;
	const event_name = "border-color d-flex " + colorStatus;
	const small_class_name = "single-event-sm d-md-none d-flex " + colorBorder;
	const small_event_name = "bordering d-flex " + colorStatus;
	return (
		<Fragment>
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
			<div className = {small_class_name}>
				<div className = "row">
					<div className = "col-8">
						<div className = "p-1">
							<div className = "event-status-sm">
								<div className = "border-color-sm d-flex">
									<div className = {small_event_name}>
										<h4> {status} </h4>
									</div>
								</div>
							</div>
							<div className = "university-name">
								<h4 className = "text-uppercase"> University of Shantanu Dhaka </h4>
							</div>
							<div className = "university-details-sm d-flex">
								<div>
									<h4> {title} </h4>
									<p> {subtitle} </p>
								</div>
							</div>
						</div>
					</div>
					<div className = "col-4">
						<div className = "date-holder">
							<p> {separateMonth} </p>
							<h2> {separateDate} </h2>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default SingleEventComponent;