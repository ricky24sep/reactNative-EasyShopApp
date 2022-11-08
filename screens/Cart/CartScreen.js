import { View, Text, StyleSheet } from "react-native";
import { useSelector } from 'react-redux';

function CartScreen(props) {

    const cartItems = useSelector((state) => state.cartItems.items);
    console.log ('CartScreen --> All cart items:', cartItems );
    return (
        <View>
            <Text>CART WORKS</Text>
        </View>
    );
}

const styles = StyleSheet.create({
});

export default CartScreen;