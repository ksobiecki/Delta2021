import React from 'react';

import { StyledSection } from './styled';

const SectionLayout: React.FC = ({ children }) => {
	return <StyledSection>{children}</StyledSection>;
};

export default SectionLayout;
