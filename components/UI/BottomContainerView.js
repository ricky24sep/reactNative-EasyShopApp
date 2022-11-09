import { View, Button, Text, StyleSheet } from "react-native";

function BottomContainerView({ price, title, onPress }) {

    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <Text style={styles.price}>${price}</Text>
            </View>
            <View style={styles.subContainer}>
                <Button 
                    title={title}
                    color='green' 
                    onPress={onPress} 
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
    },
    subContainer: {
        margin: 15,
        width: '50%',
    },
    price: {
        marginTop: 5,
        fontSize: 24,
        fontWeight: 'bold',
        color: 'red',
    },
});

export default BottomContainerView;