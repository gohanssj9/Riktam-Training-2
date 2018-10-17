import React, {Component} from 'react';
import '../assets/information.css';

import AboutInfoComponent from './AboutInfoComponent';
import EventsInfoComponent from './EventsInfoComponent';
import MembersInfoComponent from './MembersInfoComponent';

class InformationComponent extends Component{
	constructor(props){
		super(props);
		this.state = {
			active_class: ['active', 'not-active', 'not-active']
		};

		this.onClickSetActiveClass = this.onClickSetActiveClass.bind(this);
	}

	onClickSetActiveClass(id){
		console.log("Inside this thing");
		const {active_class} = this.state;
		active_class[0] = active_class[1] = active_class[2] = 'not-active';
		active_class[id] = 'active';
		this.setState({active_class});
	}

	render(){
		const {active_class} = this.state;
		return (
			<div className = "information-university">
				<div className = "header-information">
					<div className = "information-holder max-width row">
						<div className = "about col-6 col-xs-6 col-sm-4 col-md-2 col-lg-1" Id = {active_class[0]} key = {'0'} onClick = {() => this.onClickSetActiveClass(0)}>
							<p className = "text-uppercase"> About </p>
						</div>
						<div className = "events col-6 col-xs-6 col-sm-4 col-md-2 col-lg-1" Id = {active_class[1]} key = {'1'} onClick = {() => this.onClickSetActiveClass(1)}>
							<p className = "text-uppercase"> Events </p>
						</div>
						<div className = "members col-6 col-xs-6 col-sm-4 col-md-2 col-lg-1" Id = {active_class[2]} key = {'2'} onClick = {() => this.onClickSetActiveClass(2)}>
							<p className = "text-uppercase"> Members </p>
						</div>
					</div>
				</div>

				<div className = "body-information">
					<AboutInfoComponent class_name = {'d-flex'} />
					<EventsInfoComponent class_name = {'d-none'} />
					<MembersInfoComponent class_name = {'d-none'} />
				</div>
			</div>
		);
	}
}

export default InformationComponent;