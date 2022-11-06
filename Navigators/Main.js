import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function Main() {
    return (
        <Tab.Navigator initialRouteName='Home' screenOptions={{
            keyboardHidesTabBar: true,
            showLabel: false,
            activeTintColor: '#e91e63'
        }}>
        </Tab.Navigator>
    );
}