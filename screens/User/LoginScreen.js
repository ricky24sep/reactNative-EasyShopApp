import InputFormContainer from '../../components/User/InputFormContainer';

function LoginScreen(props) {
    console.log ('LoginScreen --> props:', props);

    function loginHandler({ email, password }) { 
    }
    
    return (
        <InputFormContainer isLogin={true} onAuthenticate={loginHandler} />
    );
}

export default LoginScreen;