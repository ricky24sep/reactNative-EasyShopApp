import { createStackNavigator } from '@react-navigation/stack';

import ProductContainer from '../screens/Products/ProductContainer';
import ProductDetail from '../screens/Products/ProductDetail';

const Stack = createStackNavigator();

function HomeNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='Home' 
                component={ProductContainer} 
                options={{
                    headerShown: false
                }} 
            />
            <Stack.Screen 
                name='Product Detail' 
                component={ProductDetail} 
                options={{
                    headerShown: false
                }} 
            />

        </Stack.Navigator>
    );
}

export default HomeNavigator;