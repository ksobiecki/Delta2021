import React from 'react';

import Header from '../../Shared/Header';
import SectionLayout from '../../Shared/SectionLayout';

const LandingSection = () => {
	return (
		<SectionLayout>
			<div className="left">
				<Header
					header="Landing Section"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eveniet aut distinctio magnam consectetur saepe aperiam quae id sed totam!"
				/>
			</div>
			<div className="right"></div>
		</SectionLayout>
	);
};

export default LandingSection;
