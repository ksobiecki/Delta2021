import styled from 'styled-components';

import { StyledSection } from './../../../Shared/SectionLayout/styled';

export const Form = styled.form`
	white-space: pre-wrap;
	font-size: clamp(1rem, 2vw, 1.8rem);
	font-family: OpenSans;
	padding: 4vh 2.5vw 2vh;
	text-align: justify;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	max-width: 1200px;

	@media only screen and (max-width: 768px) {
		width: 80vw;
		max-height: unset;
		padding: 4vh 2.5vw 0;
	}
`;

export const Label = styled.label`
	font-size: clamp(0.9rem, 0.7vw, 1.1rem);
	color: #f0f0f0;
	opacity: 0.5;
	margin: 0.9vh auto 0 0;
`;

export const Input = styled.input`
	width: 100%;
	font-size: clamp(1rem, 1.2vw, 1.3rem);
	padding: 0.3em 0.2em;
	margin: 0.2em 0;
	border: 2px solid #7168ad;
	border-radius: 8px;
	position: relative;
	transition: all 0.1s;
	box-sizing: content-box;

	@media (max-width: 768px) {
		height: 5vh;
	}

	&::placeholder {
		position: absolute;
		top: 5px;
		left: 5px;
		font-size: clamp(1rem, 1.2vw, 1.3rem);
	}
`;

export const Agreement = styled.div`
	margin: 1vh 0 0 0;
	display: flex;
	align-items: center;
	font-size: clamp(0.7rem, 1vw, 1rem);
	width: 100%;
	color: #f0f0f0;

	& > span {
		width: 100%;
	}
`;

export const Select = styled.select`
	width: 100%;
	font-size: clamp(1rem, 1.2vw, 1.3rem);
	padding: 0.4em 0.2em;
	margin: 0.2em 0;
	border: 2px solid #7168ad;
	border-radius: 8px;
	position: relative;
	transition: all 0.1s;
	box-sizing: content-box;

	@media (max-width: 768px) {
		height: 5vh;
	}
`;

export const Option = styled.option`
	font-size: 0.65em;
	font-family: SourceSansPro;
`;

export const Button = styled.button`
	margin: 3vh 0 0;
	width: fit-content;
	padding: 10px 25px;
	background-color: #36208a;
	border-radius: 8px;
	border: 1px solid #f0f0f0;
	transition: all 0.3s;
	font-size: clamp(1em, 1.2vw, 1.3em);
	color: #f0f0f0;
	font-family: OpenSans;
	font-weight: bold;

	@media only screen and (max-width: 768px) {
		width: 50vw;
		margin: 2vh 0;
	}

	&:hover {
		cursor: pointer;
		background-color: #6449d4;
	}
`;

export const Checkmark = styled.span`
	margin: 0 0 0 1vw;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	height: 25px;
	width: 25px;
	background-color: #f0f0f0;

	@media (max-width: 768px) {
		width: 20px;
		height: 20px;
		margin-left: 10px;
	}

	&::after {
		content: '';
		position: absolute;
		display: none;
	}
`;

export const Container = styled.label`
	position: relative;
	height: 25px;
	width: 10%;
	cursor: pointer;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	margin: 0;

	& input {
		position: absolute;
		opacity: 0;
		cursor: pointer;
		height: 0;
		width: 0;
		padding: 0;
		margin: 0;
	}

	&:hover input ~ ${Checkmark} {
		background-color: #ccc;
	}

	& input:checked ~ ${Checkmark} {
		background-color: #7168ad;
	}

	& input:checked ~ ${Checkmark}:after {
		display: block;
	}

	& ${Checkmark}:after {
		left: 12px;
		top: 5px;
		width: 5px;
		height: 15px;
		border: solid white;
		border-width: 0 3px 3px 0;
		-webkit-transform: rotate(45deg);
		-ms-transform: rotate(45deg);
		transform: rotate(45deg);

		@media (max-width: 768px) {
			left: 7px;
			top: 0px;
			width: 7px;
		}
	}
`;

export const StyledLink = styled.a`
	color: white;
	text-decoration: underline;
`;

export const Required = styled.span`
	text-transform: italic;
	color: red;
`;

export const StyledMessage = styled(StyledSection)`
	margin: 0;
	padding: 20px 0 0;
	max-width: unset;
	overflow: hidden;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	text-align: center;
	height: 100%;
	min-height: 30vh;
	color: #f0f0f0;

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
