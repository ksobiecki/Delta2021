import React from 'react';

import PaymentsForm from './PaymentsForm';

import { PaymentsFormSectionLayout, Background, Text } from './styled';

const PaymentsFormSection = () => {
	return (
		<PaymentsFormSectionLayout>
			<Background />
			<PaymentsForm />
		</PaymentsFormSectionLayout>
	);
};

export default PaymentsFormSection;
