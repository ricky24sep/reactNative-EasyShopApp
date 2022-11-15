import InputFormContainer from '../../components/User/InputFormContainer';

function RegisterScreen(props) {
    console.log ('RegisterScreen --> props:', props);

    function signupHandler({ email, password }) { 
    }
    
    return (
        <InputFormContainer isLogin={false} onAuthenticate={signupHandler} />
    );
}

export default RegisterScreen;