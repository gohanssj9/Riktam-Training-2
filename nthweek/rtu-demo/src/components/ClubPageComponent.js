import React, {Fragment} from 'react';
import '../assets/clubpage.css';

import Header from './Header';
import UniversityComponent from './UniversityComponent';
import ImageComponent from './ImageComponent';
const ClubPageComponent = () => {
	return (
		<Fragment>
			<div className = "whole-body"></div>
			<Header />
			<UniversityComponent />
			<ImageComponent />
		</Fragment>
	);
}

export default ClubPageComponent;