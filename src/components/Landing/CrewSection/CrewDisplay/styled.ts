import styled from 'styled-components';

export const CrewDisplayContainer = styled.div`
	height: fit-content;
	max-width: 500px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Image = styled.img<{ src: string }>`
	src: ${(props) => props.src};
	width: 300px;
	height: 350px;
	background-color: #95bbdf;
	margin-bottom: 10px;
`;

export const Name = styled.h3`
	font-size: 30px;
	font-family: SourceSansProBold;
	color: ${(props) => props.theme.colors.white};
`;

export const Role = styled.p`
	font-size: 18px;
	color: ${(props) => props.theme.colors.white};
	margin-bottom: 20px;
`;

export const Description = styled.p`
	font-size: 18px;
	color: ${(props) => props.theme.colors.white};
	max-height: 250px;
	overflow-y: scroll;
	padding: 10px;
`;
