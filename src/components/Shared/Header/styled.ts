import styled from 'styled-components';

export const HeaderContainer = styled.div`
	width: 600px;
`;

export const StyledHeader = styled.h2`
	font-family: SourceSansProBold;
	font-size: 84px;
	line-height: 1;
	margin-bottom: 50px;
	color: ${(props) => props.theme.colors.white};
`;

export const StyledDescription = styled.p`
	font-size: 18px;
	color: ${(props) => props.theme.colors.white};
`;
