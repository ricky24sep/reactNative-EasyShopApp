
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeNavigator from './HomeNavigator';

const Tab = createBottomTabNavigator();

function Main() {
    return (
        <Tab.Navigator initialRouteName='Home' screenOptions={{
            tabBarActiveTintColor: 'red',
        }}>
            <Tab.Screen 
                name='Home' 
                component={HomeNavigator}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <Ionicons 
                            name='home' 
                            color={color} 
                            size={30} 
                        />
                    )
                }}
            />
            <Tab.Screen 
                name='Cart' 
                component={HomeNavigator}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <Ionicons 
                            name='cart' 
                            color={color} 
                            size={30} 
                        />
                    )
                }} 
            />
            <Tab.Screen 
                name='Admin' 
                component={HomeNavigator}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <Ionicons 
                            name='cog' 
                            color={color} 
                            size={30} 
                        />
                    )
                }} 
            />
            <Tab.Screen 
                name='User' 
                component={HomeNavigator}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <Ionicons 
                            name='person' 
                            color={color} 
                            size={30} 
                        />
                    )
                }} 
            />
        </Tab.Navigator>
    );
}

export default Main;