import styled from 'styled-components';

import { Link } from 'gatsby';

import { StyledSection } from '../../Shared/SectionLayout/styled';

import backgound from '../../../assets/images/landingBackgroundAlt.png';

export const LandingSectionLayout = styled(StyledSection)`
	height: 100vh;
	margin: 0;
	padding: 0;
	max-width: unset;
	justify-content: center;
`;

export const Background = styled.div`
	height: 100vh;
	background-image: url(${backgound});
	background-repeat: no-repeat;
	background-size: cover;
	position: absolute;
	left: 0;
	right: 0;
`;

export const MainContainer = styled.div`
	z-index: 100;
	display: flex;
	align-items: center;
	flex-direction: column;
`;

export const DeltaLogo = styled.img`
	width: 450px;
	margin-bottom: 20px;

	@media (max-width: 500px) {
		width: 300px;
	}
`;

export const StyledLinkButton = styled(Link)`
	width: fit-content;
	padding: 30px;
	height: 30px;
	background-color: #7168ad;
	border-radius: 10px;
	outline: none;
	border: 2px solid #141118;
	display: flex;
	align-items: center;
	font-size: 30px;
	color: #f0f0f0;

	&:hover {
		background-color: #3c4167;
		cursor: pointer;
	}

	@media (max-width: 500px) {
		font-size: 24px;
	}
`;
