import React, { useState } from 'react';
import {
	Accordeon,
	AccordeonHeader,
	AccordeonContent,
	Arrow,
	Question,
	Numerical,
} from './styled';
interface AccordeonProps {
	num: number;
	question: string;
	answer: string;
}

const AccordeonItem: React.FC<AccordeonProps> = ({ num, question, answer }) => {
	const [isHovered, setIsHovered] = useState(false);
	const [isDropedDown, setIsDropDown] = useState(false);
	const answerArray: Array<String> = answer.split('/n');
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
				<Numerical color={isHovered ? '#BCBCBC' : 'white'}>{num}</Numerical>
				<Question>{question}</Question>
				<Arrow
					color={isHovered ? 'violet' : 'white'}
					transform={isDropedDown ? 'rotate(90deg)' : ''}
				/>
			</AccordeonHeader>
			{isDropedDown ? (
				<AccordeonContent>
					{answerArray.map((answer, index) => (
						<p key={index}>{answer}</p>
					))}
				</AccordeonContent>
			) : null}
		</Accordeon>
	);
};

export default AccordeonItem;
