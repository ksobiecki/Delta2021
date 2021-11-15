import React from 'react';
import { PartnerType } from '../../types';

import {
	SliderContainer,
	ImagesContainer,
	ImageContainer,
	ShiftedImageContainer,
	CarouselleImage,
} from './styled';

interface SliderProps {
	sliderImages: PartnerType[];
}

const Slider: React.FC<SliderProps> = ({ sliderImages }) => {
	const NUMBER_OF_SLIDES = sliderImages.length;

	return (
		<SliderContainer>
			<ImagesContainer numberOfImages={NUMBER_OF_SLIDES}>
				{sliderImages.map((logo) => (
					<ImageContainer key={logo.id} numberOfImages={NUMBER_OF_SLIDES}>
						<CarouselleImage src={logo.src} alt={logo.alt} />
					</ImageContainer>
				))}
				{sliderImages.map((logo) => (
					<ShiftedImageContainer key={logo.id}>
						<CarouselleImage src={logo.src} alt={logo.alt} />
					</ShiftedImageContainer>
				))}
			</ImagesContainer>
		</SliderContainer>
	);
};

export default Slider;
