import { View, TouchableOpacity, StyleSheet, Dimensions  } from 'react-native';

import ProductCard from './ProductCard';

const { width } = Dimensions.get('window');

function ProductList(props) {
    const { item } = props;
    return (
        <TouchableOpacity 
            style={styles.container} 
            onPress={() =>
                props.navigation.navigate('Product Detail', {item: item})
            }
        >
            <View style={styles.subContainer}>
                <ProductCard {...item} />
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