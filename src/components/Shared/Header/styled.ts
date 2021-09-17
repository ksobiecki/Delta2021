import styled from 'styled-components';

export const HeaderContainer = styled.div`
	width: 500px;
`;

export const StyledHeader = styled.h2`
	font-size: 64px;
	margin-bottom: 20px;
	color: ${(props) => props.theme.colors.purple};
`;

export const StyledDescription = styled.p`
	font-size: 18px;
	color: #333333;
`;
