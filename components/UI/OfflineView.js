import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from '../../constants/Styles';

function OfflineView() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                User is not authenticated, please login...
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: GlobalStyles.colors.red,
    },
    title: {
        padding: 10,
        textAlign: 'center',
        color: GlobalStyles.colors.white,
        fontSize: 13,
        fontWeight: 'bold',
    },
});

export default OfflineView;