import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { SwipeListView } from 'react-native-swipe-list-view';
import { Ionicons } from '@expo/vector-icons';

import CartItem from "../../components/Cart/CartItem";
import SwipeListItem from "../../components/Cart/SwipeListItem";
import BottomView from '../../components/UI/BottomView';
import { GlobalStyles } from '../../constants/Styles';

import { removeFromCart, clearCart } from '../../redux/reducers/cartReducer';

function CartScreen(props) {

    console.log ('CartScreen --> props:', props );
    console.log ('CartScreen --> props.navigation :', props.navigation );

    const cartItems = useSelector((state) => state.cartItems.items);
    console.log ('CartScreen --> All cart items:', cartItems );

    const dispatch = useDispatch();

    var totalPrice = 0;
    cartItems.forEach(item => {
        return (totalPrice += item.product.price)
    });

    props.navigation.setOptions({
        headerRight: () => (
            <TouchableOpacity style={styles.iconButton} onPress={() => {
                dispatch(clearCart(cartItems));
            }} >
                <Ionicons name='trash' color={GlobalStyles.colors.white} size={24} />
            </TouchableOpacity>    
        ),
    });

    function renderItem({ item }) {
        return (
            <CartItem 
                quantity={item.quantity}
                image={item.product.image} 
                name={item.product.name} 
                price={item.product.price} 
            />
        );
    }

    function renderHiddenItem({ item }) {
        return (
            <SwipeListItem 
                name='trash' 
                color='white' 
                size={30} 
                onPress={() => {
                    dispatch(removeFromCart(item));
                }}
            />
        );
    }

    return (
        <>
            {cartItems.length > 0 ? (
                <View style={styles.container}>
                    <SwipeListView
                        data={cartItems}
                        renderItem={renderItem}
                        renderHiddenItem={renderHiddenItem}
                        disableRightSwipe={true}
                        previewOpenDelay={3000}
                        friction={1000}
                        tension={40}
                        leftOpenValue={75}
                        stopLeftSwipe={75}
                        rightOpenValue={-75}
                    />
                     <BottomView 
                        price={totalPrice.toFixed(2)} 
                        title='Checkout' 
                        onPress={() => {
                            props.navigation.navigate('Checkout', { cartItems: cartItems });
                        }}
                    />
                </View>
            ) : (
                <View style={styles.noProductsContainer}>
                    <Text>Looks like your cart is empty!!!</Text>
                    <Text>Add products to your cart to started!!!</Text>
                </View>
            )}
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
    },
    iconButton: {
        marginRight: 20,
    },
    noProductsContainer: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default CartScreen;