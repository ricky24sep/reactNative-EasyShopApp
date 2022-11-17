import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../reducers/authReducer';
import cartReducer from '../reducers/cartReducer';

const store = configureStore({
    reducer: {
        cartItems: cartReducer,
        auth: authReducer
    }
});

export default store;
