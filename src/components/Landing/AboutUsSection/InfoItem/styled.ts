import styled from 'styled-components';

export const IconContainer = styled.div`
	display: inline-block;
	font-size: 55px;
	margin-right: 25px;
	color: ${(props) => props.theme.colors.white};
`;

export const Header = styled.h3`
	display: inline-block;
	font-size: 40px;
	font-family: SourceSansProBold;
	color: ${(props) => props.theme.colors.white};
`;

export const Text = styled.p`
	font-size: 20px;
	color: ${(props) => props.theme.colors.white};
	margin-top: 10px;
	margin-bottom: 50px;
`;
