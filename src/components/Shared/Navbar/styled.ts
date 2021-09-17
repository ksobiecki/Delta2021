import { Link } from 'gatsby';
import styled from 'styled-components';

import logo from '../../../assets/images/logo.svg';

export const Nav = styled('nav')`
	width: 100%;
	height: 10vh;
	padding: 0 5vw;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: fixed;
	top: 0;
	border-bottom: 1px solid purple;
	z-index: 1000;
	background-color: transparent;
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
	color: white;
	margin-right: 20px;
`;
