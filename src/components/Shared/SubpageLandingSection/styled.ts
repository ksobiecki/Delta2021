import styled from 'styled-components';

import { StyledSection } from '../../Shared/SectionLayout/styled';

import background from '../../../assets/images/headerBackground.png';

export const SubpageLandingSectionLayout = styled(StyledSection)`
	margin-top: 10vh;
	padding: 0;
	max-width: unset;
	height: 60vh;

	@media only screen and (max-width: 1300px) {
		height: 50vh;
	}
`;

export const Background = styled.div`
	height: 60vh;
	background-position-y: -100px;
	background-image: url(${background});
	background-repeat: no-repeat;
	background-size: cover;
	position: absolute;
	left: 0;
	right: 0;

	@media only screen and (max-width: 1300px) {
		height: 50vh;
		background-position-y: -50px;
	}

	@media only screen and (max-width: 1260px) {
		background-position-y: 0;
	}

	@media only screen and (max-width: 450px) {
		left: -10%;
	}
`;

export const Header = styled.h1`
	font-size: 100px;
	color: #f0f0f0;
	font-family: SourceSansProBold;
	z-index: 5;
	margin: 23% auto 0;

	@media only screen and (max-width: 1020px) {
		font-size: 60px;
	}

	@media only screen and (max-width: 768px) {
		margin: 20vh auto 0;
	}

	@media only screen and (max-width: 400px) {
		margin: 35vh auto 0;
	}
`;
