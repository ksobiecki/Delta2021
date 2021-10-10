import React from 'react';

import { GlobalStyle } from '../../../theme/global-style';
import Navbar from '../Navbar';

const Layout: React.FC = ({ children }) => {
	return (
		<>
			<GlobalStyle />
			<Navbar />
			{children}
		</>
	);
};

export default Layout;
