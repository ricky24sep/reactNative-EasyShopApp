import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Alert } from 'react-native';

import InputFormContainer from '../../components/User/InputFormContainer';
import LoadingOverlay from '../../components/UI/LoadingOverlay';

import { login } from '../../utils/auth';
import { authenticate } from '../../redux/reducers/authReducer';

function LoginScreen(props) {
    console.log ('LoginScreen --> props:', props);
    const [isAuthenticating, setIsAuthenticating] = useState(false);

    const dispatch = useDispatch();

    async function loginHandler({ email, password }) {
        setIsAuthenticating(true);
        try {
          const authToken = await login(email, password);
          dispatch(authenticate(authToken));
        } catch (error) {
          Alert.alert(
            'login failed',
            'Could not login. Please check again or try again later!'
          );
        }
        setIsAuthenticating(false)
        props.navigation.navigate('UserProfile');
    }
    
    if (isAuthenticating) {
      return <LoadingOverlay />
    }
    
    return (
        <InputFormContainer isLogin={true} onAuthenticate={loginHandler} />
    );
}

export default LoginScreen;