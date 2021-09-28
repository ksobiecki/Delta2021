import styled from 'styled-components';

import { StyledSection } from '../../Shared/SectionLayout/styled';

import backgound from '../../../assets/images/headerBackground.png';

export const RegisterSectionLayout = styled(StyledSection)`
	margin-top: 10vh;
	padding: 0;
	max-width: unset;
	height: 60vh;
`;

export const Background = styled.div`
	height: 60vh;
	background-position-y: -100px;
	background-image: url(${backgound});
	background-repeat: no-repeat;
	background-size: cover;
	position: absolute;
	left: 0;
	right: 0;
`;

export const Header = styled.h1`
	font-size: 100px;
	color: ${(props) => props.theme.colors.white};
	font-family: SourceSansProBold;
	z-index: 5;
	margin: 23% auto 0;
`;
