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
import { fetchCartItems, deleteCartItem, clearCartItems } from '../../utils/http';

function CartScreen(props) {

    const authToken = useSelector((state) => state.auth.authToken);
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const ITEMS = useSelector((state) => state.cartItems.items);

    const [cartItems, setCartItems] = useState(ITEMS);
    const [loading, setLoading] = useState(true);

    useFocusEffect((
        useCallback (
            () => {
                async function getCartItems() {
                    if (isAuthenticated) {
                        try {
                            const data = await fetchCartItems(authToken);
                            setCartItems(data); 
                        } catch (error) {
                            Alert.alert(
                                'Fetch error',
                                'Unable to fetch the data. Please check again or try again later!'
                            );
                        }
                    } else {
                        setCartItems(ITEMS); 
                    }
                    setLoading(false);
                }
                getCartItems()
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
                    clearCartItemsHandler()
                }} >
                    <Ionicons name='trash' color={GlobalStyles.colors.white} size={24} />
                </TouchableOpacity>    
            ),
        });
    }, [props.navigation, clearCartItemsHandler]);

    async function clearCartItemsHandler() {
        dispatch(clearCart(cartItems));
        if (isAuthenticated) {
            setLoading(true);
            try {
                const data = await clearCartItems(authToken);
                setCartItems(data); 
            } catch (error) {
                Alert.alert(
                    'Clear cart item error',
                    'Unable to clear cart item. Please check again or try again later!'
                );
            }
            setLoading(false);
        } else {
            setCartItems([]);
        }
    }

    async function deleteCartItemHandler(item) {
        dispatch(removeFromCart(item));
        if (isAuthenticated) {
            setLoading(true);
            try {
                const data = await deleteCartItem(item.id, authToken);
                setCartItems(data); 
            } catch (error) {
                Alert.alert(
                    'Delete cart item error',
                    'Unable to delete cart item. Please check again or try again later!'
                  );
            }
            setLoading(false);
        } else {
            const filteredCartItems = cartItems.filter((cartItem) => 
                cartItem.id !== item.id
            );
            setCartItems(filteredCartItems);
        }
    }

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
                    deleteCartItemHandler(item);
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
                            props.navigation.navigate('Checkout', { 
                                cartItems: cartItems 
                            });
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