import React from 'react';

import SubpageLandingSection from '../Shared/SubpageLandingSection';
import Carouselle from './Carouselle';

import { PartnersLayout, PartnersList, Background } from './styled';

import { partners } from './partners';

const Partners = () => {
	return (
		<>
			<SubpageLandingSection header="Partnerzy" />
			<Background />
			<PartnersLayout>
				<Carouselle images={partners} />
			</PartnersLayout>
		</>
	);
};

export default Partners;
