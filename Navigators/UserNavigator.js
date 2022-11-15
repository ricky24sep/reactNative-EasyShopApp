import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/User/LoginScreen';
import RegisterScreen from '../screens/User/RegisterScreen';
import UserProfileScreen from '../screens/User/UserProfileScreen';

const Stack = createStackNavigator();

function UserNavigator() {
    return (
        <Stack.Navigator 
            screenOptions={{
                headerStyle: { backgroundColor: '#0282b0' },
                headerTintColor: 'white',
            }}
        >
            <Stack.Screen name='Register' component={RegisterScreen} />
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='UserProfile' component={UserProfileScreen} />
        </Stack.Navigator>
    );
}

export default UserNavigator;