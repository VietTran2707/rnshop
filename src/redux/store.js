import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice";
import userReducer from "./user/userSlice"

export const store = configureStore({
    reducer: {
        user: userReducer,
        cart: cartReducer
    }
})