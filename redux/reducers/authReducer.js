import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        authToken: '',
        isAuthenticated: false,
    },
    reducers: {
        authenticate: (state, action) => {
            state.authToken = action.payload
            state.isAuthenticated = true
            AsyncStorage.setItem('idToken', state.authToken);
        },
        logout: (state, action) => {
            state.authToken = null
            state.isAuthenticated = false
            AsyncStorage.removeItem('idToken');
        },
    }
});

export const authenticate= authSlice.actions.authenticate;
export const logout = authSlice.actions.logout;
export default authSlice.reducer;