import styled from 'styled-components';

export const ListItem = styled.div<{ img: string; isActive: boolean }>`
	width: 100px;
	height: 100px;
	background-image: url(${(props) => props.img});
	background-size: cover;
	background-repeat: no-repeat;
	opacity: ${(props) => (props.isActive ? 1 : 0.5)};
	border: ${(props) => (props.isActive ? '#7168ad' : 'none')};

	&:hover {
		opacity: 1;
		border: 2px solid #7168ad;
		cursor: pointer;
	}
`;
