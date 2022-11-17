import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/User/LoginScreen';
import SignupScreen from '../screens/User/SignupScreen';

import { GlobalStyles } from '../constants/Styles';

const Stack = createStackNavigator();

function AuthNavigator() {
    return (
        <Stack.Navigator 
            screenOptions={{
                headerStyle: { backgroundColor: GlobalStyles.colors.darkBlue },
                headerTintColor: GlobalStyles.colors.white,
            }}
        >
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='Signup' component={SignupScreen} />
        </Stack.Navigator>
    );
}

export default AuthNavigator;