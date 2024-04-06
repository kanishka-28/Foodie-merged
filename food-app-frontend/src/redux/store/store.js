import {configureStore} from "@reduxjs/toolkit";
import authSlice from "../features/auth/slice";
import locationSlice from "../features/location/slice";
import restaurantSlice from "../features/restaurants/slice";
import loaderSlice from "../features/Loader/slice";
import cartSlice from "../features/cart/slice";
import kitchenSlice from "../features/kitchens/slice";

export const store = configureStore({
    reducer:{
        // add all reducers here
        auth: authSlice,
        location: locationSlice,
        restaurants : restaurantSlice,
        kitchens : kitchenSlice,
        loading: loaderSlice,
        cart: cartSlice,
    }
})