import { useState, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native'
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';

import ProductList from './ProductList';
import Banner from '../../components/Product/Banner';
import CategoriesSlider from '../../components/Product/CategoriesSlider';
import OfflineView from '../../components/UI/OfflineView';
import LoadingOverlay from '../../components/UI/LoadingOverlay';

import { fetchProducts, fetchCategories, fetchOffers } from '../../utils/http';

const PRODUCTS = require('../../data/products.json');
const CATEGORIES = require('../../data/categories.json');
const OFFERS = require('../../data/offers.json');

function ProductContainerScreen(props) {

    const authToken = useSelector((state) => state.auth.authToken);
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [offers, setOffers] = useState([]);
    const [productsCtg, setProductsCtg] = useState([]);
    const [active, setActive] = useState();
    const [initialState, setInitialState] = useState([]);
    const [loading, setLoading] = useState(true);

    useFocusEffect((
        useCallback (
            () => {
                setActive(-1);

                async function getOffers() {
                    return await fetchOffers(authToken);
                }

                async function getCategories() {
                    return await fetchCategories(authToken);
                }
                
                async function getProducts() {
                    return await fetchProducts(authToken);
                }

                Promise.all([getProducts(), getCategories(), getOffers()])
                .then(function (results) {
                    const products = results[0];
                    const categories = results[1];
                    const offers = results[2];

                    setProducts(products);
                    setProductsCtg(products);
                    setInitialState(products);
                    setCategories(categories);
                    setOffers(offers);
                    setLoading(false);
                })
                .catch((err) => {
                    setLoading(false);
                    setProducts(PRODUCTS);
                    setProductsCtg(PRODUCTS);
                    setInitialState(PRODUCTS);
                    setCategories(CATEGORIES);
                    setOffers(OFFERS);
                });
            }, [],
        )
    ));

    const changeCtg = (ctg) => {{
        ctg === 'all'
            ? [setProductsCtg(initialState), setActive(true)]
            : [
                setProductsCtg(
                    products.filter((item) => 
                        item.category.oid === ctg
                    ),
                    setActive(true)
                ),
            ]
    }}

    if (loading) {
        return <LoadingOverlay />
    }

    return (
        <ScrollView style={styles.container}>
            <View>
                {!isAuthenticated && <OfflineView />}
                <Banner offers={offers} />
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
                                <ProductList 
                                    navigation={props} 
                                    key={item._id.oid} 
                                    item={item}
                                    authToken={authToken} 
                                    isAuthenticated={isAuthenticated}
                                />
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
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "wrap",
        backgroundColor: "gainsboro",
    },
    center: {
        marginTop: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'normal',
        fontSize: 14,
    }
});

export default ProductContainerScreen;