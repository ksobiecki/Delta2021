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
	color: #f0f0f0;
`;

export const Role = styled.p`
	font-size: 18px;
	color: #f0f0f0;
	margin-bottom: 20px;
`;

export const Description = styled.p`
	font-size: 18px;
	color: #f0f0f0;
	max-height: 250px;
	overflow-y: scroll;
	padding: 10px;
`;
