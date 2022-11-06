import { View, TouchableOpacity, StyleSheet, Dimensions  } from 'react-native';

import ProductCard from './ProductCard';

const { width } = Dimensions.get('window');

function ProductList(props) {
    const { item } = props;
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.subContainer}>
                <ProductCard {...item} />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: width / 2,
    },
    subContainer: {
        //width: width / 2,
        backgroundColor: 'gainsboro'
    },
});


export default ProductList;