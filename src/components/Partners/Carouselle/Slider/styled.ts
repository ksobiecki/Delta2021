import styled, { keyframes } from 'styled-components';

interface CarouselleProps {
	numberOfImages: number;
}

const scroll = (numberOfImages: number) => keyframes`
	0% {
		transform: translateX(0);
	}

	100% {
		transform: translateX(calc(-250px * ${numberOfImages}));
	}
`;

export const SliderContainer = styled.div`
	height: 200px;
	margin: auto;
	position: relative;
	width: 100%;
	display: grid;
	place-items: center;
	overflow: hidden;
	background-color: white;
`;

export const ImagesContainer = styled.div<CarouselleProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	animation: ${(props) => scroll(props.numberOfImages)} 25s linear infinite;

	&:hover {
		animation-play-state: paused;
	}
`;

export const ImageContainer = styled.div<CarouselleProps>`
	height: 120px;
	width: 250px;
	display: flex;
	align-items: center;
	padding: 15px;
	transition: all 0.3s;

	&:hover {
		cursor: pointer;
		filter: grayscale(0%);
	}

	@media (max-width: 768px) {
		width: 45vw;
	}
`;

export const ShiftedImageContainer = styled(ImageContainer)`
	transform: translateX(calc(${(props) => props.numberOfImages} * 250px));
`;

export const CarouselleImage = styled.img`
	width: 100%;
`;
