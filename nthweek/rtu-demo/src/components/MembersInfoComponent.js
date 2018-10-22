import React from 'react';

import '../assets/information.css';
import mapImage from '../assets/map-image.png';

import SingleMemberComponent from './SingleMemberComponent';
import SingleOrganizerComponent from './SingleOrganizerComponent';

const MembersInfoComponent = ({class_name}) => {
	const name = "members-info max-width " + class_name;
	return (
		<div className = {name}>
			<div className = "row">
				<div className = "col-12 col-xs-12 col-sm-12 col-md-8 col-lg-8 container-1">
					<div className = "title">
						<h3> Members </h3>
					</div>
					<div className = "member-holder">
						<div className = "table-top d-md-flex flex-row d-none">
							<h4 style = {{flex: '5'}}>Player</h4>
							<h4 style = {{flex: '2'}}>UTR</h4>
							<h4 style = {{flex: '2'}}>Joined Date</h4>
							<h4 style = {{flex: '2'}}>Status</h4>
						</div>
						<SingleMemberComponent name = {'Shantanu Dhaka'} gender = {'M'} city = {'New York, NY'} rating = {'11.00'} displayChecked = {'d-none'} date = {'Sep 1, 2018'} status = {'Head Organizer'} leftBorder = {'cyan-border-left'} />
						<SingleMemberComponent name = {'Shantanu Dhaka'} gender = {'M'} city = {'Brooklyn, NY'} rating = {'UR'} displayChecked = {'d-none'} date = {'May 1, 2018'} status = {'Head Organizer'} leftBorder = {'cyan-border-left'} />
						<SingleMemberComponent name = {'Siva S'} gender = {'M'} city = {'Hyderabad, India'} rating = {'5.00'} displayChecked = {'d-none'} date = {'Jun 2, 2018'} status = {'Organizer'} leftBorder = {'cyan-border-left'} />
						<SingleMemberComponent name = {'Stephen Amritraj'} gender = {'M'} city = {'Orlando, FL'} rating = {'10.50'} displayChecked = {'d-none'} date = {'May 1, 2018'} status = {'Organizer'} leftBorder = {'cyan-border-left'} />
						<SingleMemberComponent name = {'Salman Bader'} gender = {'M'} city = {'Virginia Beach, VA'} rating = {'12.94'} displayChecked = {'d-flex'} date = {'Oct 3, 2018'} status = {'Member'} leftBorder = {'none'} />
					</div>
				</div>
				<div className = "col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4 container-2">
					<div class_name = "row">
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
		</div>
	);
}

export default MembersInfoComponent;