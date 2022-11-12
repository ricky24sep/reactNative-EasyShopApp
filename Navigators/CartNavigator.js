import { createStackNavigator } from '@react-navigation/stack';

import CartScreen from '../screens/Cart/CartScreen';
import CheckoutNavigator from './CheckoutNavigator';

const Stack = createStackNavigator();

function CartNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Cart' component={CartScreen} />
            <Stack.Screen name='Checkout' component={CheckoutNavigator} />
        </Stack.Navigator>
    );
}

export default CartNavigator;