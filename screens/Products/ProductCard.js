import { View, Image, Text, StyleSheet, Dimensions, Button } from "react-native";

var { width } = Dimensions.get('window');

function ProductCard({item, addToCart}) {

    console.log ('ProductCard --> item:', item );
    console.log ('ProductCard --> addToCart:', addToCart );

    return (
        <View style={styles.container}>
            <Image 
                style={styles.image} 
                resizeMode='contain'
                source={ 
                    item.image ? 
                    { uri: item.image } : 
                    require('../../assets/products/no-preview.png')
                }
            />
            <View style={styles.card} />
            <Text style={styles.title}>
                {
                    item.name.length > 15 ? 
                    item.name.substring(0, 15 - 3) + '...' : 
                    item.name
                }
            </Text>
            <Text style={styles.price}>${item.price}</Text>
            {
                item.countInStock > 0 ? (
                    <View style={{ marginBottom: 60 }}>
                        <Button 
                            title='Add' 
                            color='green' 
                            onPress={addToCart} 
                        />
                    </View>
                ) :
                <Text style={{ marginTop: 20 }}>Currently Unavailable</Text>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: width / 2 - 20,
        height: width / 1.75,
        padding: 10,
        borderRadius: 10,
        marginTop: 55,
        marginBottom: 5,
        marginLeft: 10,
        alignItems: 'center',
        elevation: 8,
        backgroundColor: 'white',
    },
    image: {
        width: width / 2 - 20 -10,
        height: width / 2 - 20 -30,
        backgroundColor: 'transparent',
        position: 'absolute',
        top: -45,
    },
    card: {
        marginBottom: 10,
        height: width / 2 - 20 - 90,
        backgroundColor: 'transparent',
        width: width / 2 - 20 - 10,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: 'center',
    },
    price: {
        fontSize: 16,
        color: 'orange',
        marginTop: 10,
    }
});

export default ProductCard;