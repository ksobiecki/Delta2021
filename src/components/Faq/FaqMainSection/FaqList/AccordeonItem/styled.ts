import styled from 'styled-components';
import { BiRightArrow } from '@react-icons/all-files/bi/BiRightArrow';

export const Arrow = styled(BiRightArrow)`
	margin-right: 20px;
	margin-left: auto;
	font-size: 3.6em;
	transition: all 0.3s;
	user-select: none;
	transform: ${(props) => props.transform};
	@media only screen and (max-width: 600px) {
		margin-right: auto;
		padding-left: 5px;
	}
`;

export const Accordeon = styled.div`
	cursor: pointer;
	width: 100%;
	padding: 2em;
	transition: all 0.3s;
	color: #fff;
	&:nth-child(2n + 1) {
		background-color: #2f2f2f;
	}
	&:nth-child(2n) {
		background-color: #242424;
	}
	&:hover {
		background-color: #3a3a3a;
	}
	@media only screen and (max-width: 600px) {
		width: 100%;
		padding: 1em;
	}
`;

export const AccordeonHeader = styled.div`
	display: flex;
	align-items: center;
	@media only screen and (max-width: 600px) {
		font-size: 13px;
	}
`;

export const AccordeonContent = styled.div`
	width: 100%;
	font-family: Roboto, sans-serif;
	font-weight: 200;
	display: flex;
	font-size: 1.2em;
	text-align: justify;
	@media only screen and (max-width: 600px) {
		font-size: 12px;
	}
`;

export const Numerical = styled.h3`
	font-size: 2.8em;
	font-weight: 900;
	margin: 0;
	color: ${(props) => props.color};
	@media only screen and (max-width: 600px) {
		font-size: 2.4em;
	}
`;

export const Question = styled.p`
	margin: 0;
	font-size: 1.5em;
	font-family: Roboto, sans-serif;
	font-weight: 200;
	padding: 0 0 0 1.5em;
`;
