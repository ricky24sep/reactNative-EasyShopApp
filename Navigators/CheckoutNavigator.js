import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import CheckoutScreen from '../screens/Cart/Checkout/CheckoutScreen';
import PaymentScreen from '../screens/Cart/Checkout/PaymentScreen';
import ConfirmationScreen from '../screens/Cart/Checkout/ConfirmationScreen';

import { GlobalStyles } from '../constants/Styles';

const Tab = createMaterialTopTabNavigator();

function CheckoutNavigator () {
    return (
        <Tab.Navigator 
            screenOptions={{
                headerStyle: { backgroundColor: GlobalStyles.colors.darkBlue },
                headerTintColor: GlobalStyles.colors.white,
            }}
        >
            <Tab.Screen name='Shipping' component={CheckoutScreen} />
            <Tab.Screen name='Payment' component={PaymentScreen} />
            <Tab.Screen name='Confirm' component={ConfirmationScreen} />
        </Tab.Navigator>
    );
}

export default CheckoutNavigator;