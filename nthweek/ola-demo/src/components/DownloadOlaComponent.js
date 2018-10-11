import React from 'react';
import '../assets/downloadola.css';
import '../assets/main-body-top.css';

const DownloadOlaComponent = () => {
	return (
		<section>
			<div className = "extra-padding">
				<div className = "download-image-holder">
					<div className = "row content max-width">

						<div className = "col-12 col-sm-12 col-md-6 col-lg-6 right-holder">
							<img src = 'https://www.olacabs.com/webstatic/img/ola-booking.png' className = 'booking-img' />
						</div>

						<div className = "col-12 col-sm-12 col-md-6 col-lg-6 left-holder">
							<div className = "left-section">
								<h2 className = "left-section-heading"> Book an Ola from the App </h2>
								<p className = "left-section-info"> Download the app for exclusive deals and ease of booking </p>
								<div className = "downloadola-stores">
									<div className = "col-6 col-sm-6 col-md-4 col-lg-4 download-link">
										<img src = "https://olacabs.com/webstatic/img/playstore.png" />
									</div>

									<div className = "col-6 col-sm-6 col-md-4 col-lg-4 download-link">
										<img src = "https://olacabs.com/webstatic/img/appstore.png" />
									</div>

									<div className = "col-6 col-sm-6 col-md-4 col-lg-4 download-link">
										<img src = "https://olacabs.com/webstatic/img/windowstore.png" />
									</div>

								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</section>
	);
}

export default DownloadOlaComponent;

								// <div className = "download-link-image"></div>