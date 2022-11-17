import { useState } from 'react';
import { Alert } from 'react-native';

import InputFormContainer from '../../components/User/InputFormContainer';
import LoadingOverlay from '../../components/UI/LoadingOverlay';

import { createUser } from '../../utils/auth';

function SignupScreen(props) {
    console.log ('RegisterScreen --> props:', props);
    const [isAuthenticating, setIsAuthenticating] = useState(false);

    async function signupHandler({ email, password }) {
        setIsAuthenticating(true);
        try {
          const token = await createUser(email, password);
        } catch (error) {
          Alert.alert(
            'Sign Up failed',
            'Could not sign up. Please check again or try again later!'
          );
        }
        setIsAuthenticating(false);
        props.navigation.navigate('UserProfile');
      }
    
      if (isAuthenticating) {
        return <LoadingOverlay />
      }
    
    
    return (
        <InputFormContainer isLogin={false} onAuthenticate={signupHandler} />
    );
}

export default SignupScreen;