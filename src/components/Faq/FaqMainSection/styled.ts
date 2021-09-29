import styled from 'styled-components';

import { StyledSection } from '../../Shared/SectionLayout/styled';

export const FaqMainSectionLayout = styled(StyledSection)`
	margin: 0;
	padding: 0;
	max-width: unset;
	overflow: hidden;
`;

export const Background = styled.div`
	z-index: 10;
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

export const Container = styled.div`
	width: 1280px;
	margin-left: auto;
	margin-right: auto;
	margin-top: 3vw;
	position: relative;
	height: 100%;
`;




