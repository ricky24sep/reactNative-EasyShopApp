import axios from 'axios';

const BASE_URL = 'https://easy-shop-app-6ed31-default-rtdb.firebaseio.com/'

export async function fetchProducts() {
    const response = await axios.get(
        `${BASE_URL}Products.json`
    )
    console.log('Products:', response.data);
    return response.data;
}

export async function fetchCategories() {
    const response = await axios.get(
        `${BASE_URL}Categories.json`
    )
    console.log('Categories:', response.data);
    return response.data;
}

export async function fetchOffers() {
    const response = await axios.get(
        `${BASE_URL}Offers.json`
    )
    console.log('Offers:', response.data);
    return response.data;
}