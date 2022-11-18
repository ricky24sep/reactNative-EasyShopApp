import { useDispatch } from 'react-redux';
import { View, TouchableOpacity, StyleSheet, Dimensions  } from 'react-native';

import ProductCard from './ProductCard';
import { addToCart } from '../../redux/reducers/cartReducer';
import { addProductToCart } from '../../utils/http';

const { width } = Dimensions.get('window');

function ProductList(props) {

    console.log ('ProductList --> props:', props );

    const { item, authToken } = props;
    const dispatch = useDispatch();

    async function addToCartHandler() {
        const jsonString = {
            quantity: 1, 
            _id: item._id.oid,
            name: item.name,
            image: item.image,
            price: item.price
        }
        dispatch(addToCart(jsonString));
        await addProductToCart(authToken, jsonString);
    }

    return (
        <TouchableOpacity 
            style={styles.container} 
            onPress={() =>
                props.navigation.navigate('Product Detail', {
                    authToken: authToken,
                    item: item
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
        width: width / 2,
        backgroundColor: 'gainsboro'
    },
});


export default ProductList;