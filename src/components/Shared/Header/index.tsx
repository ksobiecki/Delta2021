import React from 'react';

import { HeaderContainer, StyledHeader, StyledDescription } from './styled';

interface HeaderInterface {
	header: string;
	description: string;
}

const Header: React.FC<HeaderInterface> = ({ header, description }) => {
	return (
		<HeaderContainer>
			<StyledHeader>{header}</StyledHeader>
			<StyledDescription>{description}</StyledDescription>
		</HeaderContainer>
	);
};

export default Header;
