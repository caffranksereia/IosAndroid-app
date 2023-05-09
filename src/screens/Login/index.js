import React from 'react';
import { StyleSheet, View } from 'react-native';
import LoginComponents from '../../pages/Login/Login-Components';

export default function Login() {
	return (
		<View style={styles.container}>
			<LoginComponents />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
