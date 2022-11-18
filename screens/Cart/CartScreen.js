import { useState, useCallback, useLayoutEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native'
import { SwipeListView } from 'react-native-swipe-list-view';
import { Ionicons } from '@expo/vector-icons';

import CartItem from "../../components/Cart/CartItem";
import SwipeListItem from "../../components/Cart/SwipeListItem";
import BottomView from '../../components/UI/BottomView';
import { GlobalStyles } from '../../constants/Styles';
import LoadingOverlay from '../../components/UI/LoadingOverlay';

import { removeFromCart, clearCart } from '../../redux/reducers/cartReducer';
import { fetchCartItems } from '../../utils/http';

function CartScreen(props) {

    const authToken = useSelector((state) => state.auth.authToken);
    console.log ('CartScreen --> authToken:', authToken);

    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useFocusEffect((
        useCallback (
            () => {
                async function getCartItems() {
                    try {
                        const data = await fetchCartItems(authToken);
                        setCartItems(data); 
                        setLoading(false);
                    } catch (error) {
                        Alert.alert(
                            'Fetch error',
                            'Unable to fetch the data. Please check again or try again later!'
                          );
                        setLoading(false);
                    }
                }
                getCartItems();  
            }, [],
        )
    ));

    var totalPrice = 0;
    cartItems.forEach(item => {
        return (totalPrice += item.price)
    });

    const dispatch = useDispatch();
    useLayoutEffect(() => {
        props.navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity style={styles.iconButton} onPress={() => {
                    dispatch(clearCart(cartItems));
                }} >
                    <Ionicons name='trash' color={GlobalStyles.colors.white} size={24} />
                </TouchableOpacity>    
            ),
        });
    }, [props.navigation]);

    function renderItem({ item }) {
        return (
            <CartItem 
                quantity={item.quantity}
                image={item.image} 
                name={item.name} 
                price={item.price} 
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

    if (loading) {
        return <LoadingOverlay />
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