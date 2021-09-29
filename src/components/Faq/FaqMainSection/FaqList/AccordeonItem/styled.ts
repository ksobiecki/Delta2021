import styled from 'styled-components';
import { BiRightArrow } from '@react-icons/all-files/bi/BiRightArrow';

export const Arrow = styled(BiRightArrow)`
	margin-right: 20px;
	margin-left: auto;
	font-size: 3.6em;
	transition: all 0.3s;
	user-select: none;
	transform: ${(props) => props.transform};
`;

export const Accordeon = styled.div`
	width: 100%;
	padding: 2em;
	transition: all 0.3s;
	color: #fff;
	&:nth-child(2n + 1) {
		background-color: #181818;
	}
	&:nth-child(2n) {
		background-color: #202020;
	}
	&:hover {
		background-color: #363636;
	}
`;

export const AccordeonHeader = styled.div`
	display: flex;
	align-items: center;
`;

export const AccordeonContent = styled.div`
	width: 100%;
	font-family: Roboto, sans-serif;
	font-weight: 200;
	display: flex;
	font-size: 1.5em;
	text-align: justify;
`;
