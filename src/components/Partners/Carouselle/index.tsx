import React from 'react';

import Slider from './Slider';
import { CarouselleContainer } from './styled';

import { PartnerType } from '../types';

interface CarouselleProps {
	images: PartnerType[];
}

const Carouselle: React.FC<CarouselleProps> = ({ images }) => {
	return (
		<CarouselleContainer>
			<Slider sliderImages={images}></Slider>
		</CarouselleContainer>
	);
};

export default Carouselle;
