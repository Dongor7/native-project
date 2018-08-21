import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

import HomeScreen from '../../screens/HomeScreen';
import LoginScreen from "../../screens/Login";
import RegistrationScreen from "../../screens/Registration";
import AuthLoadingScreen from "../../screens/AuthLoadingScreen";

const AppStack = createStackNavigator({ Home: HomeScreen});
const AuthStack = createStackNavigator({ Login: LoginScreen, Registration: RegistrationScreen });

export default createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
);