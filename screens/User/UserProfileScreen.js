import { View, StyleSheet } from "react-native";

function UserProfileScreen(props) {
    console.log ('UserProfileScreen --> props:', props );
    return (
        <View> 
            <Text>User Profile Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
});

export default UserProfileScreen;