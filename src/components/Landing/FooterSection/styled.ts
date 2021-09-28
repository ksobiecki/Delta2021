import styled from 'styled-components';

import { Link } from 'gatsby';

import { StyledSection } from '../../Shared/SectionLayout/styled';

import backgound from '../../../assets/images/footerBackground.png';

export const FooterSectionLayout = styled(StyledSection)`
	height: 90vh;
	margin: 0;
	padding: 0;
	max-width: unset;
`;

export const Background = styled(Link)`
	height: 90vh;
	background-image: url(${backgound});
	background-repeat: no-repeat;
	background-size: cover;
	position: absolute;
	left: 0;
	right: 0;

	&:hover {
		cursor: pointer;
	}
`;
