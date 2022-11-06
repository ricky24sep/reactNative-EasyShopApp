import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';

import ProductList from './ProductList';
import Banner from '../../components/Banner';
import CategoriesSlider from '../../components/CategoriesSlider';

const PRODUCTS = require('../../data/products.json');
const CATEGORIES = require('../../data/categories.json');

var { height } = Dimensions.get('window')

function ProductContainer() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [productsCtg, setProductsCtg] = useState([]);
    const [active, setActive] = useState();
    const [initialState, setInitialState] = useState([]);

    useEffect(() => {
        setProducts(PRODUCTS);
        setCategories(CATEGORIES);
        setProductsCtg(PRODUCTS);
        setActive(-1);
        setInitialState(PRODUCTS);
    }, []);

    const changeCtg = (ctg) => {{

        console.log('selected category id:', ctg);
        console.log('All Products:', products);
        console.log('Filtered products:', 
            products.filter((item) => item.category.$oid === ctg
        ));
        
        ctg === 'all'
            ? [setProductsCtg(initialState), setActive(true)]
            : [
                setProductsCtg(
                    products.filter((item) => 
                        item.category.$oid === ctg
                    ),
                    setActive(true)
                ),
            ]
    }}

    return (
        <ScrollView style={styles.container}>
            <View>
                <Banner />
                <View style={styles.categoriesContainer}>
                    <CategoriesSlider
                        categories={categories}
                        categoryFilter={changeCtg}
                        active={active}
                        setActive={setActive}
                    />
                </View> 
                {productsCtg.length > 0 ? (
                    <View style={styles.listContainer}>
                        {productsCtg.map((item) => {
                            return (
                                <ProductList key={item._id.$oid} item={item} />
                            )
                        })}
                    </View>
                ) : (
                    <View style={styles.center}>
                        <Text style={styles.title}>No Products Found</Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'gainsboro', 
    },
    categoriesContainer: {
        marginTop: 10,
    },
    listContainer: {
        //height: height,
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "wrap",
        backgroundColor: "gainsboro",
    },
    center: {
        //height: '40%',
        marginTop: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'normal',
        fontSize: 14,
    }
});

export default ProductContainer;