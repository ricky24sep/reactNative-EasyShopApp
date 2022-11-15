import { View, Text, StyleSheet } from "react-native";

function LoginScreen(props) {
    console.log ('LoginScreen --> props:', props );
    return (
        <View> 
            <Text>Login Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
});

export default LoginScreen;