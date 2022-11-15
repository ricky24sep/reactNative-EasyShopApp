import { Pressable, View, Text, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../constants/Styles';

function Button({children, onPress, mode, style}) {
    return (
        <View style={style}>
            <Pressable 
                onPress={onPress} 
                style={({ pressed }) => pressed && styles.pressed}
            >
                <View style={[styles.button, mode === 'flat' && styles.flat]}>
                    <Text style={[styles.buttonText, mode === 'flat' && styles.flatText]}>
                        {children}
                    </Text>
                </View>
            </Pressable>
        </View>
    );
}

export default Button;

const styles = StyleSheet.create({
    button:{
        borderRadius: 4,
        padding: 14,
        backgroundColor: GlobalStyles.colors.darkBlue,
    },
    flat: {
        backgroundColor: GlobalStyles.colors.clear,
    },
    buttonText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: GlobalStyles.colors.white,
        textAlign: 'center',
    },
    flatText: {
        color: GlobalStyles.colors.darkBlue,
    },
    pressed: {
        opacity: 0.75,
        //backgroundColor: GlobalStyles.colors.darkBlue,
        borderRadius: 4,
    },
});