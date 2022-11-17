import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import HomeNavigator from './HomeNavigator';
import CartNavigator from './CartNavigator';
import AuthNavigator from './AuthNavigator';
import UserProfileNavigator from './UserProfileNavigator';

import { authenticate } from '../redux/reducers/authReducer';
import { GlobalStyles } from '../constants/Styles';

const Tab = createBottomTabNavigator();

function Main() {

    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    console.log ('LoginScreen --> isAuthenticated:', isAuthenticated);

    const dispatch = useDispatch();
    useEffect(() => {
        async function fetchToken() {
          const storedToken = await AsyncStorage.getItem('idToken');
          if (storedToken) {
            dispatch(authenticate(storedToken));
          }
        }
        fetchToken();
    }, []);


    function UserProfileStack() {
        return (
            <>
                {isAuthenticated && <UserProfileNavigator />}
                {!isAuthenticated && <AuthNavigator />}
            </>
        );
    }

    return (
        <Tab.Navigator 
            initialRouteName='HomeTab' 
            screenOptions={{
                tabBarStyle: { backgroundColor: GlobalStyles.colors.darkBlue },
                tabBarInactiveTintColor: GlobalStyles.colors.lightBlue,
                tabBarActiveTintColor: GlobalStyles.colors.white,
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
                component={UserProfileStack}
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