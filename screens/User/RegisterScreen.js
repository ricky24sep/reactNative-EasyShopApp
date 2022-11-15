import { useState } from 'react';
import { View, Alert, StyleSheet } from "react-native";

import InputForm from "../../components/User/InputForm";
import Button from '../../components/UI/Button';

function RegisterScreen(props) {
    console.log ('RegisterScreen --> props:', props );

    const [isLogin, setIsLogin] = useState(false);
    const [credentialsInvalid, setCredentialsInvalid] = useState({
        email: false,
        password: false,
        confirmEmail: false,
        confirmPassword: false,
    });
    
    function switchAuthModeHandler() {
        props.navigation.navigate('Login');
    }
    
    function submitHandler(credentials) {
        let { email, confirmEmail, password, confirmPassword } = credentials;

        email = email.trim();
        password = password.trim();

        const emailIsValid = email.includes('@');
        const passwordIsValid = password.length > 6;
        const emailsAreEqual = email === confirmEmail;
        const passwordsAreEqual = password === confirmPassword;

        if (!emailIsValid ||
            !passwordIsValid ||
            (!isLogin && (!emailsAreEqual || !passwordsAreEqual))) {
            Alert.alert('Invalid input', 'Please check your entered credentials.');
            setCredentialsInvalid({
                email: !emailIsValid,
                confirmEmail: !emailIsValid || !emailsAreEqual,
                password: !passwordIsValid,
                confirmPassword: !passwordIsValid || !passwordsAreEqual,
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

export default RegisterScreen;