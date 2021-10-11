import styled from 'styled-components';
import { Link } from 'gatsby';

export const TextContainer = styled.div`
	color: white;
	text-align: center;
	width: 100%;
	max-width: 800px;
	margin: 20px auto 0;
	padding: 0 25px;
`;

export const StyledParagraph = styled.p`
	margin-bottom: 7px;
	font-size: clamp(12px, 1.5vw, 18px);
`;

export const StyledLink = styled(Link)`
	font-weight: bold;
	color: #b0a5cf;
	text-decoration: underline;
`;

export const StyledText = styled.h3`
	width: 100%;
	text-align: center;
	color: white;
	font-size: clamp(18px, 2vw, 24px);
`;
