import React from 'react';
import AccordeonItem from './AccordeonItem';

import { AccordeonList } from './styled';

const FaqList = () => {
	return (
		<AccordeonList>
			<AccordeonItem
				num={1}
				question="na kij to robissz"
				answer="bo lubie"
			/>
			<AccordeonItem
				num={1}
				question="na kij to robissz"
				answer="bo lubie"
			/>
			<AccordeonItem
				num={1}
				question="na kij to robissz"
				answer="bo lubie"
			/>
			<AccordeonItem
				num={1}
				question="na kij to robissz"
				answer="bo lubie"
			/>
			<AccordeonItem
				num={1}
				question="na kij to robissz"
				answer="bo lubie"
			/>
		</AccordeonList>
	);
};

export default FaqList;
