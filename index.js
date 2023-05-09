import React from 'react';
import { GlobalStyle } from './src/styled/themes/GlobalStyle-Container';
import { ThemeProvider } from 'styled-components';
import { theme } from './src/_assets/theme';
import Router from './src/_config/routes/routes';

export default function App() {
	<ThemeProvider theme={theme}>
		<GlobalStyle />
		<Router />
	</ThemeProvider>;
}
