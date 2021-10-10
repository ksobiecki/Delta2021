import React, { useState } from 'react';

import { crewList } from './CrewList/data';

import SectionLayout from '../../Shared/SectionLayout';
import Header from '../../Shared/Header';

import CrewList from './CrewList';
import CrewDisplay from './CrewDisplay';

import { Left, Right } from './styled';

const CrewSection = () => {
	const [selectedItem, setSelectedItem] = useState(1);

	const memberChangeHandler = (index: number) => {
		setSelectedItem(index);
	};

	return (
		<SectionLayout>
			<Left>
				<Header
					header="Kadra"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eveniet aut distinctio magnam consectetur saepe aperiam quae id sed totam!"
				/>
				<CrewList
					onMemberChange={(index) => memberChangeHandler(index)}
					activeMemberIndex={selectedItem}
				/>
			</Left>
			<Right>
				<CrewDisplay member={crewList[selectedItem - 1]} />
			</Right>
		</SectionLayout>
	);
};

export default CrewSection;
