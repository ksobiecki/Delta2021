import React from 'react';
import RegisterForm from './RegisterForm';

import { RegisterFormSectionLayout, Background } from './styled';

import RegisterForm from './RegisterForm';

const RegisterFormSection = () => {
	return (
		<RegisterFormSectionLayout>
			<Background />
			<RegisterForm />
		</RegisterFormSectionLayout>
	);
};

export default RegisterFormSection;
