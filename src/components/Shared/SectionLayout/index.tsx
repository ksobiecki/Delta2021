import React from 'react';

import { StyledSection, Icon, Arrow } from './styled';

const SectionLayout: React.FC = ({ children }) => {
	return (
		<StyledSection>
			{children}
			<Arrow>
				<path d="M0 0 L30 22 L60 0"></path>
				<path d="M0 20 L30 42 L60 20"></path>
				<path d="M0 40 L30 62 L60 40"></path>
			</Arrow>
		</StyledSection>
	);
};

export default SectionLayout;
