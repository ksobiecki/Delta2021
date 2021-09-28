import styled from 'styled-components';

interface CarouselleProps {
	numberOfImages: number;
}

export const SliderContainer = styled.div`
	height: 150px;
	margin: auto;
	position: relative;
	width: 100%;
	display: grid;
	place-items: center;
	overflow: hidden;
	background-color: rgb(222, 239, 248);

	@media (max-width: 768px) {
		height: auto;
	}
`;

export const ImagesContainer = styled.div<CarouselleProps>`
	display: flex;
	width: calc(100% - 20vw);
	align-items: center;
	justify-content: center;

	@media (max-width: 768px) {
		width: 100%;
		flex-wrap: wrap;
	}
`;

export const ImageContainer = styled.div`
	height: 120px;
	width: 250px;
	display: flex;
	align-items: center;
	padding: 15px;
	transition: all 0.3s;
	filter: grayscale(100%);

	&:hover {
		cursor: pointer;
		filter: grayscale(0%);
	}

	@media (max-width: 768px) {
		width: 45vw;
	}
`;

export const CarouselleImage = styled.img`
	width: 100%;
`;
