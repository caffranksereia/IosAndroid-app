import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import RegisterUserComponents from '../../components/Cadastros/Register_User-Components';

export default function RegisterUser() {
	return (
		<View style={styles.container}>
			<RegisterUserComponents />
			<StatusBar style="auto" />
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
