import React from 'react';
import { GlobalStyle } from './components/_container/GlobalStyle-Container';
import { ThemeProvider } from 'styled-components';
import { theme } from './_assets/theme/theme';
import Router from './src/_config/routes/routes';

export default function App() {
	<ThemeProvider theme={theme}>
		<GlobalStyle />
		<Router />
	</ThemeProvider>;
}
