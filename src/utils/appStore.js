import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import locationReducer from "./locationSlice";
import toggleReducer from "./toggleSlice";
import appDataReducer from "./appDataSlice";

const appStore = configureStore({
  reducer: {
    cartData: cartReducer,
    locationData: locationReducer,
    toggleData: toggleReducer,
    restaurantData: appDataReducer,
  },
});

export default appStore;
