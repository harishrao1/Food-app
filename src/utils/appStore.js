import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import locationReducer from "./locationSlice";
import toggleReducer from "./toggleSlice";
import appDataSlice from "./appDataSlice";

const appStore = configureStore({
  reducer: {
    cartData: cartReducer,
    locationData: locationReducer,
    toggleData: toggleReducer,
    restaurantData : appDataSlice
  },
});

export default appStore;