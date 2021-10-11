import React, { useState } from 'react';

import PaymentsForm from './PaymentsForm';
import PaymentsAccountInfo from './PaymentsAccountInfo';

import { PaymentsFormSectionLayout, Background } from './styled';

const PaymentsFormSection = () => {
	const [isFilled, setIsFilled] = useState(false);
	return (
		<PaymentsFormSectionLayout>
			<Background />
			<PaymentsAccountInfo isShown={false} />
			{/* <PaymentsForm fillForm={() => setIsFilled(true)} /> */}
		</PaymentsFormSectionLayout>
	);
};

export default PaymentsFormSection;
