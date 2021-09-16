import React from 'react';

import { Nav, Logo, LinksContainer, NavLink } from './styled';

const Navbar = () => {
	return (
		<Nav>
			<Logo to="/" />
			<LinksContainer>
				<NavLink to="/authentication">Authentication</NavLink>
				<NavLink to="/payments">Payments</NavLink>
			</LinksContainer>
		</Nav>
	);
};

export default Navbar;
