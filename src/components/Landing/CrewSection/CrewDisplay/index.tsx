import React from 'react';

import { CrewMember } from '../CrewList/CrewMember/types';

import { CrewDisplayContainer, Image, Name, Role, Description } from './styled';

import avatarPlaceholder from '../../../../assets/images/avatarPlaceholder.png';

interface CrewDisplayInterface {
	member: CrewMember;
}

const CrewDisplay: React.FC<CrewDisplayInterface> = ({ member }) => {
	return (
		<CrewDisplayContainer>
			<Image src={member.photo ? member.photo : avatarPlaceholder} />
			<Name>{member.name}</Name>
			<Role>{member.role}</Role>
			<Description>{member.description}</Description>
		</CrewDisplayContainer>
	);
};

export default CrewDisplay;
