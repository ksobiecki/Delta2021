import styled, { keyframes } from 'styled-components';

import { IoIosArrowDown } from '@react-icons/all-files/io/IoIosArrowDown';

const down = keyframes`
	0% { opacity:0 }
	25% { opacity:1 }
	75% { opacity:0 }
	100% { opacity:0 }
`;

export const StyledSection = styled.section`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 0 auto;
	padding: 0 0 10vh;
	height: 90vh;
	max-width: 1500px;
	position: relative;
`;

export const Icon = styled(IoIosArrowDown)`
	position: absolute;
	left: 50%;
	bottom: 20px;
	color: #f0f0f0;
	font-size: 40px;
`;

export const Arrow = styled.svg`
	width: 60px;
	height: 82px;
	position: absolute;
	left: 15%;
	margin-left: 0px;
	bottom: 8%;
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
