import React, {Fragment} from 'react';
import '../assets/clubpage.css';

import Header from './Header';
import UniversityComponent from './UniversityComponent';
const ClubPageComponent = () => {
	return (
		<Fragment>
			<div className = "whole-body"></div>
			<Header />
			<UniversityComponent />
		</Fragment>
	);
}

export default ClubPageComponent;