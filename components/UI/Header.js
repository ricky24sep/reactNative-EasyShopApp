import { StyleSheet, Image, SafeAreaView } from 'react-native';

function Header() {
    return (
        <SafeAreaView style={styles.header}>
            <Image style={{ height: 50 }} 
                source={require('../../assets/logo.png')} 
                resizeMode='contain'
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header: {
        //width: '100%',
        flexDirection: 'row',
        //alignContent: 'center',
        justifyContent: 'center',
        //padding: 20,
        //marginTop: 100,
    }
});

export default Header;