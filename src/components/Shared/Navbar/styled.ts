import { Link } from 'gatsby';
import styled from 'styled-components';

import logo from '../../../assets/images/logoWhite.svg';

export const Nav = styled.nav`
	width: 100%;
	height: 10vh;
	padding: 0 5vw;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: fixed;
	top: 0;
	border-bottom: 1px solid #141118;
	z-index: 1000;
	background-color: #141118;
`;

export const Logo = styled(Link)`
	width: 80px;
	height: 80px;
	background: url(${logo});
	background-size: 125%;
	background-position: center;
	background-repeat: no-repeat;

	@media only screen and (max-width: 600px) {
		width: 60px;
		height: 60px;
	}
`;

export const LinksContainer = styled('div')``;

export const NavLink = styled(Link)`
	font-size: 20px;
	font-weight: bold;
	color: #f0f0f0;
	margin-right: 20px;

	&:last-of-type {
		margin-right: 0;
	}

	&:hover {
		color: #7168ad;
	}

	@media only screen and (max-width: 600px) {
		font-size: 14px;
	}
`;
