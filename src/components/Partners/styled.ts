import styled from 'styled-components';

import { StyledSection } from '../Shared/SectionLayout/styled';

export const PartnersLayout = styled(StyledSection)`
	height: 30vh;
	padding-top: 9%;
`;

export const PartnersList = styled.div`
	display: grid;
	grid-template-columns: repeat(4);
`;

export const Background = styled.div`
	z-index: -1;
	position: absolute;
	left: 0;
	top: 70vh;
	width: 100vw;
	height: 30vh;
	background: linear-gradient(
		180deg,
		#151319 0%,
		#151319 10%,
		#3c4167 90%,
		#3c4167 100%
	);
`;
