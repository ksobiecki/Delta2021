import styled, { keyframes } from 'styled-components';

import { StyledSection } from '../../Shared/SectionLayout/styled';

const down = keyframes`
	0% { opacity:0 }
	25% { opacity:1 }
	75% { opacity:0 }
	100% { opacity:0 }
`;

export const PartnersSectionLayout = styled(StyledSection)`
	margin: 0;
	padding: 0;
	max-width: unset;
	display: flex;
	flex-direction: column;
	overflow: hidden;
`;

export const Left = styled.div`
	margin-left: 10vw;
	height: 80%;
	width: 40vw;
	display: flex;
	flex-direction: column;
	padding-top: 100px;
`;

export const Right = styled.div`
	margin-right: 10vw;
	height: 60%;
	width: 40vw;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	background-color: #f0f0f0;
	border-radius: 10px;
`;

export const Logo = styled.img`
	width: 65%;
`;

export const Horizontal = styled.div`
	display: flex;
	height: 70%;
	align-items: center;
`;

export const Arrow = styled.svg`
	width: 60px;
	height: 82px;
	position: absolute;
	left: 50%;
	margin-left: 0px;
	bottom: 3%;
	z-index: 999;

	path {
		stroke: #f0f0f0;
		stroke-width: 2px;
		fill: transparent;
		animation: ${down} 2s infinite;

		&:nth-of-type(1) {
			animation-delay: -1s;
		}

		&:nth-of-type(2) {
			animation-delay: -0.5s;
		}

		&:nth-of-type(3) {
			animation-delay: 0s;
		}
	}
`;
