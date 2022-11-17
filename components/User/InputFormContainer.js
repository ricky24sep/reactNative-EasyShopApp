import { useState } from 'react';
import { View, Alert, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';

import InputForm from "./InputForm";
import Button from '../UI/Button';

function InputFormContainer({ isLogin, onAuthenticate }) {

    const navigation = useNavigation();
    const [credentialsInvalid, setCredentialsInvalid] = useState({
        email: false,
        password: false,
    });
    
    function switchAuthModeHandler() {
        if (isLogin) {
            navigation.navigate('Signup');
          } else {
            navigation.goBack();
          }
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

        onAuthenticate({ email, password });
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
        marginTop: 14,
    },
});

export default InputFormContainer;