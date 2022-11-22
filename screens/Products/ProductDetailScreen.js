import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Image, View, Text, StyleSheet, ScrollView, Alert } from 'react-native';

import { addToCart } from '../../redux/reducers/cartReducer';
import { addProductToCart } from '../../utils/http';
import BottomView from '../../components/UI/BottomView';

function ProductDetailScreen(props) {

    console.log ('ProductDetailScreen --> props.route.params:', props.route.params);

    const [item, setItem] = useState(props.route.params.item);
    const [authToken, setAuthToken] = useState(props.route.params.authToken);
    const [isAuthenticated, setIsAuthenticated] = useState(props.route.params.isAuthenticated);

    const dispatch = useDispatch();
    async function addToCartHandler() {
        const jsonString = {
            quantity: 1, 
            oid: item._id.oid,
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
                    'Unable to add cart item. Please check again or try again later!'
                );
            }
        }
    }

    return (
        <View style={styles.container}>
            <ScrollView style={{ marginBottom: 80, padding: 5 }}>
                <View style={styles.imageContainer}>
                    <Image 
                        style={styles.image}
                        source={ 
                            item.image ? 
                            { uri: item.image } : 
                            require('../../assets/products/no-preview.png')
                        }
                        resizeMode='contain'
                    />
                </View>
                <View style={styles.contentContainer}>
                    <Text style={styles.contentHeader}>{item.name}</Text>
                    <Text style={styles.contentText}>{item.brand}</Text>

                </View>
            </ScrollView>
            <BottomView 
                price={item.price} 
                title='Add' 
                onPress={addToCartHandler} 
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        height: '100%',
    },
    imageContainer: {
        backgroundColor: 'white',
        padding: 0,
        margin: 0
    },
    image: {
        width: '100%',
        height: 250,
    },
    contentContainer: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentHeader: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    contentText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});

export default ProductDetailScreen;