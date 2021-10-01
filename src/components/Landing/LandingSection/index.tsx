import React from 'react';

import {
	LandingSectionLayout,
	Background,
	MainContainer,
	DeltaLogo,
	StyledLinkButton,
} from './styled';

import logo from '../../../assets/images/logo.png';

const LandingSection = () => {
	return (
		<LandingSectionLayout>
			<Background />
			<MainContainer>
				<DeltaLogo src={logo} />
				<StyledLinkButton to="/rejestracja"> ZAREJESTRUJ SIĘ </StyledLinkButton>
			</MainContainer>
		</LandingSectionLayout>
	);
};

export default LandingSection;
