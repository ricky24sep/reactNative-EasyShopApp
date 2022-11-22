import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addToCart: (state, action) => {
            state.items.push(action.payload);
            //console.log('cartReducer.js ---> cart items:', state.items);
        },
        removeFromCart: (state, action) => {
            let indexOfItem = state.items.indexOf(action.payload)
            state.items.splice(indexOfItem, 1);
            //console.log('cartReducer.js ---> cart items:', state.items);
        },
        clearCart: (state, action) => {
            state.items.splice(0, action.payload.length);
            //console.log('cartReducer.js ---> cart items:', state.items);
        },
    }
});

export const addToCart= cartSlice.actions.addToCart;
export const removeFromCart = cartSlice.actions.removeFromCart;
export const clearCart = cartSlice.actions.clearCart;
export default cartSlice.reducer;