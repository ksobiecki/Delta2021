import React from 'react';
import RegisterForm from './RegisterForm';

import { RegisterFormSectionLayout, Background } from './styled';

const RegisterFormSection = () => {
	return (
		<RegisterFormSectionLayout>
			<Background />
			<RegisterForm />
		</RegisterFormSectionLayout>
	);
};

export default RegisterFormSection;
