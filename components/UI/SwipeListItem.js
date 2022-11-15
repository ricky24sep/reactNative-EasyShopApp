import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';

function SwipeListItem({ name, color, size, onPress }) {

    return (
        <View style={styles.hiddenContainer}>
            <TouchableOpacity style={styles.hiddenButton} onPress={onPress} >
                <Ionicons name={name} color={color} size={size} />
            </TouchableOpacity>    
        </View>
    );
}

const styles = StyleSheet.create({
    hiddenContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    hiddenButton: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 25,
        height: 80,
        width: 100,
    }
});

export default SwipeListItem;