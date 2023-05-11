import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import HomeComponents from '../../components/Home/Home-Components';

export default function Home() {
	return (
		<ThemeProvider>
			<HomeComponents />
		</ThemeProvider>
	);
}
