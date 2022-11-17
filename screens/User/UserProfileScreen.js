import { View, Text, StyleSheet } from "react-native";
import { useDispatch } from 'react-redux';

import Button from "../../components/UI/Button";
import { logout } from '../../redux/reducers/authReducer';

function UserProfileScreen(props) {
    console.log ('UserProfileScreen --> props:', props );

    const dispatch = useDispatch();
    function logoutHandler() {
        dispatch(logout());
    }

    return (
        <View style={styles.container}> 
            <Button onPress={logoutHandler}>LOGOUT</Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 48,
        marginHorizontal: 28,
    },
});

export default UserProfileScreen;