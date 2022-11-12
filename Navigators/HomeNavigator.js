import { createStackNavigator } from '@react-navigation/stack';

import ProductContainerScreen from '../screens/Products/ProductContainerScreen';
import ProductDetailScreen from '../screens/Products/ProductDetailScreen';
import Header from '../components/UI/Header';

const Stack = createStackNavigator();

function HomeNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={ProductContainerScreen} />
            <Stack.Screen name='Product Detail' component={ProductDetailScreen} />
        </Stack.Navigator>
    );
}

export default HomeNavigator;