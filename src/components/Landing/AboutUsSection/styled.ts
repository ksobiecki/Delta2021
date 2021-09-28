import styled from 'styled-components';

export const Left = styled.div`
	height: 100%;
	width: 50%;
	display: flex;
	padding-top: 165px;
`;

export const Right = styled.div`
	height: 100%;
	width: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ItemsList = styled.div`
	height: 60%;
	display: flex;
	flex-direction: column;

	& > div:nth-child(2) {
		margin-left: 200px;
	}
`;

export const Separator = styled.div`
	width: 50vw;
	height: 1px;
	border-bottom: 4px solid ${(props) => props.theme.colors.lightPurple};
	position: absolute;
	bottom: 10%;
`;
