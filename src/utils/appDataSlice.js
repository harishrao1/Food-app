import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allRestaurants: [],
  bannerInfo: [],
  foodCategories: [],
};
const appDataSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setRestaurants: (state, action) => {
      state.allRestaurants = action.payload;
    },
    setBannerInfo: (state, action) => {
      state.bannerInfo = action.payload;
    },
    setFoodCategories: (state, action) => {
      state.foodCategories = action.payload;
    },
  },
});
export const { setRestaurants, setBannerInfo, setFoodCategories } =
  appDataSlice.actions;

export default appDataSlice.reducer;
