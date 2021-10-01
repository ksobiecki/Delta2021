import { Link } from 'gatsby';
import styled from 'styled-components';

import logo from '../../../assets/images/logoWhite.svg';

export const Nav = styled('nav')`
	width: 100%;
	height: 10vh;
	padding: 0 5vw;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: fixed;
	top: 0;
	border-bottom: 1px solid ${(props) => props.theme.colors.darkPurple};
	z-index: 1000;
	background-color: ${(props) => props.theme.colors.darkPurple};
`;

export const Logo = styled(Link)`
	width: 80px;
	height: 80px;
	background: url(${logo});
	background-size: 125%;
	background-position: center;
	background-repeat: no-repeat;
`;

export const LinksContainer = styled('div')``;

export const NavLink = styled(Link)`
	font-size: 20px;
	font-weight: bold;
	color: ${(props) => props.theme.colors.white};
	margin-right: 20px;

	&:last-of-type {
		margin-right: 0;
	}

	&:hover {
		color: ${(props) => props.theme.colors.lightPurple};
	}
`;
