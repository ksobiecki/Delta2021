import React from 'react';
import { Partnership } from '../../types';

import {
	SliderContainer,
	ImagesContainer,
	ImageContainer,
	CarouselleImage,
} from './styled';

interface SliderProps {
	sliderImages: Partnership[];
}

const Slider: React.FC<SliderProps> = ({ sliderImages }) => {
	const NUMBER_OF_SLIDES = sliderImages.length;

	return (
		<SliderContainer className="carouselle-container">
			<ImagesContainer className="carouselle" numberOfImages={NUMBER_OF_SLIDES}>
				{sliderImages.map((logo) => (
					<ImageContainer key={logo.id} className="slide">
						<CarouselleImage src={logo.logo} alt={logo.name} />
					</ImageContainer>
				))}
			</ImagesContainer>
		</SliderContainer>
	);
};

export default Slider;
