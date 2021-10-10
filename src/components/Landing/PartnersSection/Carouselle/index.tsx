import React from 'react';

import Slider from './Slider';
import { CarouselleContainer } from './styled';

import p1 from '../../../../assets/images/partners/accenture.png';

const Carouselle = () => {
	const images = [
		{
			id: 1,
			name: 'Accenture',
			logo: p1,
		},
		{
			id: 2,
			name: 'Accenture',
			logo: p1,
		},
		{
			id: 3,
			name: 'Accenture',
			logo: p1,
		},
		{
			id: 4,
			name: 'Accenture',
			logo: p1,
		},
		{
			id: 5,
			name: 'Accenture',
			logo: p1,
		},
	];

	return (
		<CarouselleContainer>
			<Slider sliderImages={images}></Slider>
		</CarouselleContainer>
	);
};

export default Carouselle;
