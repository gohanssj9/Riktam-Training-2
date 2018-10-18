import React, {Fragment} from 'react';
import '../assets/clubpage.css';

import Header from './Header';
import UniversityComponent from './UniversityComponent';
import ImageComponent from './ImageComponent';
import InformationComponent from './InformationComponent';
import FooterComponent from './FooterComponent';

const ClubPageComponent = () => {
	return (
		<Fragment>
			<div className = "whole-body"></div>
			<Header />
			<UniversityComponent />
			<ImageComponent />
			<InformationComponent />
			<FooterComponent />
			<div className = "whole-body"></div>
		</Fragment>
	);
}

export default ClubPageComponent;