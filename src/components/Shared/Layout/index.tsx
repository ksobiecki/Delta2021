import React from 'react';

import { LayoutRoot } from './styled';
import { GlobalStyle } from '../../../theme/global-style';
import Navbar from '../Navbar';

const Layout: React.FC = ({ children }) => {
	return (
		<>
			<GlobalStyle />
			<LayoutRoot>
				<Navbar />
				{children}
			</LayoutRoot>
		</>
	);
};

export default Layout;
