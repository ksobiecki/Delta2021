import React from 'react';
import { IconType } from '@react-icons/all-files';

import { Header, IconContainer, Text } from './styled';

interface InfoItemProps {
	header: string;
	Icon: IconType;
	text: string;
}

const InfoItem: React.FC<InfoItemProps> = ({ header, Icon, text }) => {
	return (
		<div>
			<IconContainer>
				<Icon />
			</IconContainer>
			<Header>{header}</Header>
			<Text>{text}</Text>
		</div>
	);
};

export default InfoItem;
