import styled from 'styled-components';

import { StyledSection } from '../../Shared/SectionLayout/styled';

import backgound from '../../../assets/images/landingBackground.jpg';

export const LandingSectionLayout = styled(StyledSection)`
	height: 100vh;
	margin: 0;
	padding: 0;
	max-width: unset;
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
