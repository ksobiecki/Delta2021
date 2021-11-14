import React from 'react';

import { Nav, Logo, LinksContainer, NavLink } from './styled';

const Navbar = () => {
	return (
		<Nav>
			<Logo to="/" />
			<LinksContainer>
				<NavLink to="/rejestracja">Rejestracja</NavLink>
				<NavLink to="/platnosci">Płatności</NavLink>
				<NavLink to="/faq">FAQ</NavLink>
				<NavLink to="/partnerzy">Partnerzy</NavLink>
			</LinksContainer>
		</Nav>
	);
};

export default Navbar;
