import React, { useState } from 'react';
import { Accordeon, AccordeonHeader, AccordeonContent, Arrow } from './styled';
interface AccordeonProps {
	num: number;
	question: string;
	answer: string;
}

const AccordeonItem: React.FC<AccordeonProps> = ({ num, question, answer }) => {
	const [isHovered, setIsHovered] = useState(false);
   const [isDropedDown, setIsDropDown] = useState(false);
	return (
		<Accordeon
			background-color={isHovered ? 'black' : 'red'}
			onMouseEnter={() => {
				setIsHovered(true);
			}}
			onMouseLeave={() => {
				setIsHovered(false);
			}}
			onClick={() => {
				setIsDropDown(!isDropedDown);
			}}
		>
			<AccordeonHeader>
				<h3>{num}</h3>
				<p>{question}</p>
				<Arrow
					color={isHovered ? 'violet' : 'white'}
					transform={isDropedDown ? 'rotate(90deg)' : ''}
				/>
			</AccordeonHeader>
			{isDropedDown ? (
				<AccordeonContent>
					<p>{answer}</p>
				</AccordeonContent>
			) : null}
		</Accordeon>
	);
};

export default AccordeonItem;
