import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Image, View, Text, StyleSheet, ScrollView, Button } from 'react-native';

import { addToCart } from '../../redux/reducers/cartReducer';

function ProductDetail(props) {

    console.log ('ProductDetail --> props:', props);
    console.log ('ProductDetail --> props.route.params.item:', props.route.params.item);

    const [item, setItem] = useState(props.route.params.item);
    const [availability, setAvailability] = useState('');

    const dispatch = useDispatch();
    function addToCartHandler() {
        dispatch(addToCart({ quantity: 1, cartItem: item}));
    }

    return (
        <View style={styles.container}>
            <ScrollView style={{ marginBottom: 80, padding: 5 }}>
                <View style={styles.imageContainer}>
                    <Image 
                        style={styles.image}
                        source={{
                            uri: item.image ? item.image 
                            : 'https://www.freepngimg.com/thumb/fifa/11-2-fifa-png-images.png'
                        }}
                        resizeMode='contain'
                    />
                </View>
                <View style={styles.contentContainer}>
                    <Text style={styles.contentHeader}>{item.name}</Text>
                    <Text style={styles.contentText}>{item.brand}</Text>

                </View>
            </ScrollView>
            <View style={styles.bottomContainer}>
                <View style={styles.bottonContainer}>
                    <Text style={styles.button}>${item.price}</Text>
                </View>
                <View style={styles.bottonContainer}>
                <Button 
                    title='Add' 
                    color='green' 
                    onPress={addToCartHandler} 
                />
                </View>
            </View>
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
    bottomContainer: {
        width: '100%',
        flexDirection: 'row',
        position: 'relative',
        bottom: 0,
        backgroundColor: 'white',
    },
    bottonContainer: {
        margin: 18,
        width: '50%',
    },
    button: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'red',
    },
});

export default ProductDetail;