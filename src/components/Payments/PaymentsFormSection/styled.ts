import styled from 'styled-components';

import { StyledSection } from '../../Shared/SectionLayout/styled';

export const PaymentsFormSectionLayout = styled(StyledSection)`
	margin: 0;
	padding: 0;
	max-width: unset;
	overflow: hidden;
	align-items: baseline;
	justify-content: center;
	height: 100%;
	flex-direction: column;
	min-height: 30vh;

	@media only screen and (max-width: 1300px) {
		min-height: 40vh;
	}
`;

export const Background = styled.div`
	z-index: -1;
	position: absolute;
	left: 0;
	top: 0;
	width: 100vw;
	height: 100%;
	background: linear-gradient(
		180deg,
		#151319 0%,
		#151319 10%,
		#3c4167 90%,
		#3c4167 100%
	);
`;
