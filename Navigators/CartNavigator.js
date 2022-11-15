import { createStackNavigator } from '@react-navigation/stack';

import CartScreen from '../screens/Cart/CartScreen';
import CheckoutNavigator from './CheckoutNavigator';

import { GlobalStyles } from '../constants/Styles';

const Stack = createStackNavigator();

function CartNavigator() {
    return (
        <Stack.Navigator 
            screenOptions={{
                headerStyle: { backgroundColor: GlobalStyles.colors.darkBlue },
                headerTintColor: GlobalStyles.colors.white,
            }}
        >
            <Stack.Screen name='Cart' component={CartScreen} />
            <Stack.Screen name='Checkout' component={CheckoutNavigator} />
        </Stack.Navigator>
    );
}

export default CartNavigator;