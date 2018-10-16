import React from 'react';

import '../assets/imagecomp.css';
const ImageComponent = () => {
	return (
		<div className = "row checkClass">
			<div className = "col-12 col-sm-12 col-md-12 col-lg-12 background-image">
				<div className = "photo-count d-flex justify-content-center align-items-center">
					<p className = "text-uppercase"> +0 Photos </p>
				</div>
			</div>
		</div>
	);
}

export default ImageComponent;