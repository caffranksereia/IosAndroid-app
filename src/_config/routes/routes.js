import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../screens/Home';
import Login from '../../screens/Login';
import RegisterUser from '../../screens/Cadastros';
import Dashboard from '../../screens/Dashboard';
import Produtos from '../../screens/Produtos';

const routers = createNativeStackNavigator();

const Router = () => {
	return (
		<NavigationContainer>
			<routers.Navigator>
				<routers.Screen name="Home" component={Home} />
				<routers.Screen name="Login" component={Login} />
				<routers.Screen name="Cadastro" component={RegisterUser} />
				<routers.Screen name="Dashboard" component={Dashboard} />
				<routers.Screen name="Produtos" component={Produtos} />
			</routers.Navigator>
		</NavigationContainer>
	);
};

export default Router;
