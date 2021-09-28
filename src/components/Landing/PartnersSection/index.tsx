import React from 'react';

import p1 from '../../../assets/images/partners/binarapps.svg';
import p2 from '../../../assets/images/partners/niceguys.png';

import Header from '../../Shared/Header';

import {
	Left,
	Right,
	Logo,
	PartnersSectionLayout,
	Horizontal,
	Arrow,
} from './styled';

import Carouselle from './Carouselle';

const PartnersSection = () => {
	return (
		<PartnersSectionLayout>
			<Horizontal>
				<Left>
					<Header
						header="Nasi partnerzy"
						description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eveniet aut distinctio magnam consectetur saepe aperiam quae id sed totam! Lorem ipsum dolor sit amet consectetur adipisicing elit."
					/>
					<Arrow>
						<path d="M0 0 L30 22 L60 0"></path>
						<path d="M0 20 L30 42 L60 20"></path>
						<path d="M0 40 L30 62 L60 40"></path>
					</Arrow>
				</Left>
				<Right>
					<Logo src={p1} alt="binarapps" />
					<Logo src={p2} alt="niceguys" />
				</Right>
			</Horizontal>
			<Carouselle />
		</PartnersSectionLayout>
	);
};

export default PartnersSection;
