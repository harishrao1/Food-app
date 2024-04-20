import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
  name: "location",
  initialState: {
    userLocation: JSON.parse(localStorage.getItem("UserLocation")) || null,
  },
  reducers: {
    getLocation: (state, action) => {
      state.userLocation = action.payload;
      localStorage.setItem("UserLocation", JSON.stringify(state.userLocation));
    },
  },
});

export default locationSlice.reducer;
export const { getLocation } = locationSlice.actions;
