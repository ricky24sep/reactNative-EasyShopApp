import { useState } from 'react';
import { View, Alert, StyleSheet } from "react-native";

import InputForm from "../../components/User/InputForm";
import Button from '../../components/UI/Button';

function LoginScreen(props) {
    console.log ('LoginScreen --> props:', props );

    const [isLogin, setIsLogin] = useState(true);
    const [credentialsInvalid, setCredentialsInvalid] = useState({
        email: false,
        password: false,
    });
    
    function switchAuthModeHandler() {
        props.navigation.goBack();
    }
    
    function submitHandler(credentials) {
        let { email, password } = credentials;

        email = email.trim();
        password = password.trim();

        const emailIsValid = email.includes('@');
        const passwordIsValid = password.length > 6;

        if (!emailIsValid || !passwordIsValid ) {
            Alert.alert('Invalid input', 'Please check your entered credentials.');
            setCredentialsInvalid({
                email: !emailIsValid,
                password: !passwordIsValid,
            });
            return;
        }
    }
    
    return (
        <View style={styles.container}> 
            <InputForm
                isLogin={isLogin}
                onSubmit={submitHandler}
                credentialsInvalid={credentialsInvalid}
            />
            <View style={styles.button}>
                <Button mode='flat' onPress={switchAuthModeHandler}>
                    {isLogin ? 'Create a new user' : 'Log in instead'}
                </Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 48,
        marginHorizontal: 28,
    },
    button: {
        marginTop: 8,
    },
});

export default LoginScreen;