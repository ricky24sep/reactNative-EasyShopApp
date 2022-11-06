import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

function CategoriesSlider(props) {
    return (
        <ScrollView key={998} style={styles.container} horizontal={true}>
            <TouchableOpacity 
                key={1} 
                onPress={() => {
                    props.categoryFilter('all'), 
                    props.setActive(-1)
                }}
            >
                <View style={[
                    styles.item, 
                    props.active == -1 ? styles.active : styles.inactive 
                ]}>
                    <Text style={styles.name}>All</Text>
                </View>
            </TouchableOpacity>
            {props.categories.map((item) => (
                <TouchableOpacity 
                    key={item._id.$oid} 
                    onPress={() => {
                        props.categoryFilter(item._id.$oid), 
                        props.setActive(props.categories.indexOf(item))
                    }}
                >
                    <View style={[
                        styles.item, 
                        props.active == props.categories.indexOf(item) ? styles.active : styles.inactive 
                    ]}>
                        <Text style={styles.name}>{item.name}</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white', 
        height: 50,
    },
    item: {
        height: '50%',
        marginTop: 12.5,
        marginLeft: 10,
        paddingLeft: 5,
        paddingRight: 5,
        justifyContent: 'center',
        borderRadius: 10,
    },
    name: {
        color: 'white',
        fontWeight: 'normal',
        fontSize: 13,
    },
    active: {
        backgroundColor: '#03bafc',
    },
    inactive: {
        backgroundColor: '#a0e1eb',
    },
});

export default CategoriesSlider;
