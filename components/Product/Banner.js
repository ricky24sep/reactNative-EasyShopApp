import { Image, StyleSheet, Dimensions, View, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';

var { width } = Dimensions.get('window');

function Banner(props) {

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.swiper}>
                    <Swiper
                        style={{ height: width / 2 }}
                        showsButtons={false}
                        autoplay={true}
                        autoplayTimeout={2}
                    >
                        {props.offers.map((item) => {
                            return (
                                <Image
                                    style={styles.imageBanner}
                                    key={item}
                                    resizeMode='contain'
                                    source={{ uri: item }}
                                />
                            );
                        })}
                    </Swiper>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gainsboro',
    },
    swiper: {
        width: width,
        alignItems: 'center',
        marginTop: 10,
    },
    imageBanner: {
        height: width / 2,
        width: width - 40,
        borderRadius: 10,
        marginHorizontal: 20
    },
});

export default Banner;