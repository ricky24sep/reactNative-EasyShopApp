import { useDispatch } from 'react-redux';
import { View, TouchableOpacity, StyleSheet, Dimensions  } from 'react-native';

import ProductCard from './ProductCard';
import { addToCart } from '../../redux/reducers/cartReducer';

const { width } = Dimensions.get('window');

function ProductList(props) {

    const { item } = props;
    const dispatch = useDispatch();

    console.log ('ProductList --> props:', props );
    console.log ('ProductList --> item:', item );

    function addToCartHandler() {
        dispatch(addToCart({ quantity: 1, product: item}));
    }

    return (
        <TouchableOpacity 
            style={styles.container} 
            onPress={() =>
                props.navigation.navigate('Product Detail', {item: item})
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