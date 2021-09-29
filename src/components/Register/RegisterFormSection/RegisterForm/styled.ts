import styled from 'styled-components';

export const Form = styled.form`
	white-space: pre-wrap;
	font-size: clamp(1rem, 2vw, 1.8rem);
	font-family: OpenSans;
	padding: 4vh 2.5vw 0;
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
	font-size: clamp(0.3rem, 0.7vw, 1.1rem);
	color: ${(props) => props.theme.colors.white};
	opacity: 0.5;
	margin: 0.9vh auto 0 0;

	@media (max-width: 768px) {
		font-size: 1.3em;
	}
`;

export const Input = styled.input`
	width: 100%;
	font-size: clamp(1em, 1.2vw, 1.3em);
	padding: 0.3em 0.2em;
	margin: 0.2em 0;
	border: 2px solid ${(props) => props.theme.colors.lightPurple};
	border-radius: 8px;
	position: relative;
	transition: all 0.1s;
	box-sizing: content-box;

	@media (max-width: 768px) {
		height: 5vh;
		font-size: 1.5em;
	}

	&::placeholder {
		position: absolute;
		top: 5px;
		left: 5px;
		font-size: 0.6em;

		@media (max-width: 768px) {
			font-size: 1.3em !important;
		}
	}
`;

export const Agreement = styled.div`
	margin: 1vh 0 0 0;
	display: flex;
	align-items: center;
	font-size: clamp(0.5rem, 1vw, 1rem);
	width: 100%;
	color: ${(props) => props.theme.colors.white};

	& > span {
		width: 100%;
	}

	@media screen and (max-width: 768px) {
		font-size: 1rem;
	}
`;

export const Select = styled.select`
	width: 100%;
	font-size: clamp(1em, 1.2vw, 1.3em);
	padding: 0.4em 0.2em;
	margin: 0.2em 0;
	border: 2px solid ${(props) => props.theme.colors.lightPurple};
	border-radius: 8px;
	position: relative;
	transition: all 0.1s;
	box-sizing: content-box;

	@media (max-width: 768px) {
		height: 5vh;
		font-size: 1.5em;
	}
`;

export const Option = styled.option`
	font-size: 0.65em;
	font-family: SourceSansPro;
`;

export const Button = styled.button`
	margin: 2vh 0 0 0;
	width: 10vw;
	padding: 0.5em 0.2em;
	background-color: ${(props) => props.theme.colors.white};
	border-radius: 8px;
	border: 2px solid ${(props) => props.theme.colors.darkPurple};
	transition: all 0.3s;

	@media only screen and (max-width: 768px) {
		width: 50vw;
		height: 5vh;
		margin: 2vh 0;
	}

	&:hover {
		cursor: pointer;
		background-color: ${(props) => props.theme.colors.lightPurple};
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
	background-color: ${(props) => props.theme.colors.white};

	@media (max-width: 768px) {
		width: 15px;
		height: 15px;
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
		background-color: ${(props) => props.theme.colors.lightPurple};
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
			left: 8px;
			top: 0px;
			width: 3px;
		}
	}
`;
