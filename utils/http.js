import axios from 'axios';

const BASE_URL = 'https://easy-shop-app-6ed31-default-rtdb.firebaseio.com/'

export async function fetchProducts(authToken) {
    const response = await axios.get(
        `${BASE_URL}Products.json?auth=${authToken}`
    )
    console.log('Products:', response.data);
    return response.data;
}

export async function fetchCategories(authToken) {
    const response = await axios.get(
        `${BASE_URL}Categories.json?auth=${authToken}`
    )
    console.log('Categories:', response.data);
    return response.data;
}

export async function fetchOffers(authToken) {
    const response = await axios.get(
        `${BASE_URL}Offers.json?auth=${authToken}`
    )
    console.log('Offers:', response.data);
    return response.data;
}

export async function addProductToCart(authToken, data) {
    const response = await axios.post( 
        BASE_URL + `/Cart.json?auth=${authToken}`, data
    );
    console.log('CartItems:', response.data);
}

export async function fetchCartItems(authToken) {
    const response = await axios.get(
        `${BASE_URL}Cart.json?auth=${authToken}`
    )
    const cartItems = [];
    for (const key in response.data) {
        const obj = {
                quantity: response.data[key].quantity, 
                _id: response.data[key]._id,
                name: response.data[key].name,
                image: response.data[key].image,
                price: response.data[key].price
        };
        cartItems.push(obj);
    }
    console.log('CartItems:', cartItems);
    return cartItems;
}