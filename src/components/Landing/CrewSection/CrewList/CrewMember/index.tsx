import React from 'react';

import placeholder from '../../../../../assets/images/avatarPlaceholder.png';

import { CrewMember as CrewMemberType } from './types';

import { ListItem } from './styled';

interface CrewMemberProps {
	onIconClick(index: number): void;
	member: CrewMemberType;
	isActive: boolean;
}

const CrewMember: React.FC<CrewMemberProps> = ({
	onIconClick,
	member,
	isActive,
}) => {
	const iconClickHandler = () => {
		onIconClick(member.id);
	};

	return (
		<ListItem
			img={member.photo ? member.photo : placeholder}
			isActive={isActive}
			onClick={iconClickHandler}
		/>
	);
};

export default CrewMember;
