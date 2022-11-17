import { createStackNavigator } from '@react-navigation/stack';
import UserProfileScreen from '../screens/User/UserProfileScreen';
import { GlobalStyles } from '../constants/Styles';

const Stack = createStackNavigator();

function UserProfileNavigator() {
    return (
        <Stack.Navigator 
            screenOptions={{
                headerStyle: { backgroundColor: GlobalStyles.colors.darkBlue },
                headerTintColor: GlobalStyles.colors.white,
            }}
        >
            <Stack.Screen name='UserProfile' component={UserProfileScreen} />
        </Stack.Navigator>
    );
}

export default UserProfileNavigator;