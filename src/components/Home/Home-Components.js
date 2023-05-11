import React from 'react';
import { StatusBar, Text, View } from 'expo-status-bar';
import { Wrapper } from '../../styled/containers/Wrapper-Container';

export default class HomeComponents extends React.Component() {
	render() {
		return (
			<Wrapper>
				<View style={styles.container}>
					<Text>Open up App.js to start working on your app!</Text>
					<StatusBar style="auto" />
				</View>
			</Wrapper>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
