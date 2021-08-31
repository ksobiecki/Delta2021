import React from 'react';

// const video = require('../../../assets/videos/promo_video.mp4');
const video = require('../../../assets/images/promo.mp4');

const VideoSection = () => (
	<section className="video-section">
		<video
			style={{ width: '100vw', height: '100vh', objectFit: 'contain' }}
			controls
			loop
			muted
			autoPlay
		>
			<source src={video} type="video/>mp4" />
			<track />
		</video>
		<div>CTA container</div>
	</section>
);

export default VideoSection;
