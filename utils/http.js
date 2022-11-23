import axios from 'axios';

const BASE_URL = 'https://easy-shop-app-6ed31-default-rtdb.firebaseio.com/'

export async function fetchProducts(authToken) {
    const response = await axios.get(
        `${BASE_URL}Products.json?auth=${authToken}`
    )
    console.log('http.js --> Products:', response.data);
    return response.data;
}

export async function fetchCategories(authToken) {
    const response = await axios.get(
        `${BASE_URL}Categories.json?auth=${authToken}`
    )
    console.log('http.js --> Categories:', response.data);
    return response.data;
}

export async function fetchOffers(authToken) {
    const response = await axios.get(
        `${BASE_URL}Offers.json?auth=${authToken}`
    )
    console.log('http.js --> Offers:', response.data);
    return response.data;
}

export async function addProductToCart(authToken, data) {
    console.log('http.js --> addProductToCart --> cartItem:', data);
    const response = await axios.post( 
        `${BASE_URL}Cart.json?auth=${authToken}`, data
    );
}

export async function fetchCartItems(authToken) {
    const response = await axios.get(
        `${BASE_URL}Cart.json?auth=${authToken}`
    )
    const cartItems = [];
    for (const key in response.data) {
        const obj = {
                id: key,
                oid: response.data[key].oid,
                quantity: response.data[key].quantity, 
                name: response.data[key].name,
                image: response.data[key].image,
                price: response.data[key].price
        };
        cartItems.push(obj);
    }
    console.log('http.js --> fetchCartItems:', cartItems);
    return cartItems;
}

export async function deleteCartItem(id, authToken) {
    console.log('http.js --> deleteCartItem --> id:', id);
    await axios.delete(
        `${BASE_URL}Cart/${id}.json?auth=${authToken}`
    )
    fetchCartItems(authToken)
}

export async function clearCartItems(authToken) {
    await axios.delete(
        `${BASE_URL}Cart.json?auth=${authToken}`
    )
    fetchCartItems(authToken)
}