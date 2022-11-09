import { View, Text, Image, StyleSheet } from "react-native";

function CartItem({ quantity, image, name, price }) {

    return (
        <View>
            <View style={styles.container}>
                <View style={styles.leftContainer}>
                    <Image 
                        style={styles.image} 
                        resizeMode='contain'
                        source={ 
                            image ? 
                            { uri: image } : 
                            require('../../assets/products/no-preview.png')
                        }
                    />
                    <Text>{name}</Text>
                </View>
                <View style={styles.rightContainer}>
                    <View style={styles.quantity}>
                        <Text>{quantity}</Text>
                    </View>
                    <Text style={styles.price}>${price}</Text>
                </View >
            </View>
            <View style={styles.border}>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    leftContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
    },
    rightContainer: {
        flexDirection: 'row',
        marginRight: 20,
    },
    quantity: {
        marginRight: 25
    },
    image: {
        width: 60,
        height: 70,
        marginTop: 5,
        marginRight: 10,
        //backgroundColor: 'transparent',
    },
    price: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    border: {
        height: 1,
        backgroundColor: '#D3D3D3'
    }
});

export default CartItem;