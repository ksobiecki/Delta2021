import React from 'react';

import { SubpageLandingSectionLayout, Background, Header } from './styled';

interface SubpageLandingSectionProps {
	header: string;
}

const SubpageLandingSection: React.FC<SubpageLandingSectionProps> = ({
	header,
}) => {
	return (
		<SubpageLandingSectionLayout>
			<Background />
			<Header>{header}</Header>
		</SubpageLandingSectionLayout>
	);
};

export default SubpageLandingSection;
