import React from 'react';
import FaqList from './FaqList/index';

import { FaqMainSectionLayout, Background, Container } from './styled';

const FaqMainSection = () => {
	return (
		<FaqMainSectionLayout>
			<Background>
				<Container>
					<FaqList />
				</Container>
			</Background>
		</FaqMainSectionLayout>
	);
};

export default FaqMainSection;
