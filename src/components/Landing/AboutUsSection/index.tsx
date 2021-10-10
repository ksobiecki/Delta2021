import React from 'react';

import Header from '../../Shared/Header';
import SectionLayout from '../../Shared/SectionLayout';
import InfoItem from './InfoItem';

import { BsHouseDoorFill } from '@react-icons/all-files/bs/BsHouseDoorFill';
import { BsCalendarFill } from '@react-icons/all-files/bs/BsCalendarFill';
import { FaBus } from '@react-icons/all-files/fa/FaBus';

import { Left, Right, ItemsList, Separator } from './styled';

const AboutUsSection = () => {
	return (
		<SectionLayout>
			<Left>
				<Header
					header="O Delcie 2021"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eveniet aut distinctio magnam consectetur saepe aperiam quae id sed totam!"
				/>
			</Left>
			<Right>
				<ItemsList>
					<InfoItem
						header="Miejsce"
						Icon={BsHouseDoorFill}
						text="Ośrodek Dresso"
					/>
					<InfoItem
						header="Termin"
						Icon={BsCalendarFill}
						text="Ośrodek Dresso"
					/>
					<InfoItem header="Ilość miejsc" Icon={FaBus} text="Ośrodek Dresso" />
				</ItemsList>
				<Separator />
			</Right>
		</SectionLayout>
	);
};

export default AboutUsSection;
