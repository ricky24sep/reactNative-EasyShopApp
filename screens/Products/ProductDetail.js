import { useState } from 'react';
import { Image, View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';

function ProductDetail(props) {

    const [item, setItem] = useState(props.route.params.item);
    const [availability, setAvailability] = useState('');

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
                <TouchableOpacity style={styles.bottonContainer}>
                    <Text style={[styles.button, { textAlign: 'right', fontSize: 18 }]}>
                        Add
                    </Text>
                </TouchableOpacity>
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
        width: '50%',
    },
    button: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 18,
        color: 'red',
    },
});

export default ProductDetail;