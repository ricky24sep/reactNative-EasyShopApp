import { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';

import ProductList from './ProductList';
import Banner from '../../components/Product/Banner';
import CategoriesSlider from '../../components/Product/CategoriesSlider';
import LoadingOverlay from '../../components/UI/LoadingOverlay';

import { fetchProducts, fetchCategories, fetchOffers } from '../../utils/http';

function ProductContainerScreen(props) {

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [offers, setOffers] = useState([]);
    const [productsCtg, setProductsCtg] = useState([]);
    const [active, setActive] = useState();
    const [initialState, setInitialState] = useState([]);
    const [loading, setLoading] = useState(true);

    useFocusEffect((
        useCallback(() => {
            setActive(-1);
    
            async function getProducts() {
                const data = await fetchProducts();
                setProducts(data);
                setProductsCtg(data);
                setInitialState(data);
    
                async function getCategories() {
                    const data = await fetchCategories();
                    setCategories(data);
                    setLoading(false);
                }
                getCategories();

                async function getOffers() {
                    const data = await fetchOffers();
                    setOffers(data);
                }
                getOffers();
                
            }
            getProducts(); 
            
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
                                    navigation={props.navigation} 
                                    key={item._id.oid} 
                                    item={item} 
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

export default ProductContainerScreen;