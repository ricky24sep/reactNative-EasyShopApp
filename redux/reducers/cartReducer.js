import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addToCart: (state, action) => {
            state.items.push(action.payload);
            console.log('cart items:', state.items);
        },
        removeFromCart: (state, action) => {
            state.items.splice(state.items.indexOf(action.payload), 1);
            console.log('cart items:', state.items);
        },
        // clearCart: (state, action) => {
        //     state.items.
        // },
    }
});

export const addToCart= cartSlice.actions.addToCart;
export const removeFromCart = cartSlice.actions.removeFromCart;
export default cartSlice.reducer;