import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeNavigator from './HomeNavigator';
import CartNavigator from './CartNavigator';
import UserNavigator from './UserNavigator';

import Header from '../components/UI/Header';

const Tab = createBottomTabNavigator();

function Main() {
    return (
        <Tab.Navigator 
            initialRouteName='HomeTab' 
            screenOptions={{
                //headerStyle: { backgroundColor: '#351401' },
                //headerTintColor: 'white',
                tabBarStyle: { backgroundColor: '#0282b0' },
                tabBarInactiveTintColor: '#9ee4fe',
                tabBarActiveTintColor: 'white',
            }}
        >
            <Tab.Screen 
                name='HomeTab' 
                component={HomeNavigator}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Home',
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
                name='CartTab' 
                component={CartNavigator}
                options={{
                    headerShown: false,
                    headerTitle: (props) => <Header />,
                    tabBarLabel: 'Cart',
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
                name='AdminTab' 
                component={HomeNavigator}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Admin',
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
                name='UserTab' 
                component={UserNavigator}
                options={{
                    headerShown: false,
                    tabBarLabel: 'User',
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