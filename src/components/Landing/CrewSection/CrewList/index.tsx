import React from 'react';

import { crewList } from './data';

import { ListContainer } from './styled';

import CrewMember from './CrewMember';

interface CrewListProps {
	onMemberChange(index: number): void;
	activeMemberIndex: number;
}

const CrewList: React.FC<CrewListProps> = ({
	onMemberChange,
	activeMemberIndex,
}) => {
	const activeMemberChangeHandler = (index: number) => {
		onMemberChange(index);
	};

	return (
		<ListContainer>
			{crewList.map((member) => (
				<CrewMember
					key={member.id}
					member={member}
					isActive={member.id === activeMemberIndex}
					onIconClick={(id) => activeMemberChangeHandler(id)}
				/>
			))}
		</ListContainer>
	);
};

export default CrewList;
