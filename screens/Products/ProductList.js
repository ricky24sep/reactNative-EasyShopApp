import { useDispatch } from 'react-redux';
import { View, TouchableOpacity, StyleSheet, Dimensions  } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ProductCard from './ProductCard';
import { addToCart } from '../../redux/reducers/cartReducer';
import { addProductToCart } from '../../utils/http';

function ProductList({ item, authToken, isAuthenticated }) {

    const navigation = useNavigation();
    const dispatch = useDispatch();

    async function addToCartHandler() {
        const jsonString = {
            quantity: 1, 
            id: item._id.oid,
            name: item.name,
            image: item.image,
            price: item.price
        }
        dispatch(addToCart(jsonString));
        if (isAuthenticated) {
            try {
                await addProductToCart(authToken, jsonString);
            } catch (error) {
                Alert.alert(
                    'Add item to cart',
                    'Unable to add item to cart. Please check again or try again later!'
                );
            }
        } 
    }

    return (
        <TouchableOpacity 
            style={styles.container} 
            onPress={() =>
                navigation.navigate('Product Detail', {
                    item: item,
                    authToken: authToken,
                    isAuthenticated: isAuthenticated
                })
            }
        >
            <View style={styles.subContainer}>
                <ProductCard item={item} addToCart={addToCartHandler} />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '50%',
    },
    subContainer: {
        width: '50%',
        backgroundColor: 'gainsboro'
    },
});


export default ProductList;