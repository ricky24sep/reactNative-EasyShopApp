import { createStackNavigator } from '@react-navigation/stack';

import CartScreen from '../screens/Cart/CartScreen';
import CheckoutScreen from '../screens/Cart/CheckoutScreen';

const Stack = createStackNavigator();

function CartNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='Cart' 
                component={CartScreen} 
                options={{
                    headerShown: false
                }} 
            />
            <Stack.Screen 
                name='Checkout' 
                component={CheckoutScreen} 
                options={{
                    headerShown: false
                }} 
            />
        </Stack.Navigator>
    );
}

export default CartNavigator;