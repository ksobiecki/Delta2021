import React from 'react';
import { ThemeProvider } from 'styled-components';
import './src/theme/fonts.css';
import theme from './src/theme/theme';

export const wrapRootElement = ({ element }) => (
	<ThemeProvider theme={theme}>{element}</ThemeProvider>
);
