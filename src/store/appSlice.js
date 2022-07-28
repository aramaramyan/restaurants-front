import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getRestaurants from "../services/getRestaurants";
import getRestaurant from "../services/getRestaurant";

export const getRestaurantsThunk = createAsyncThunk("app/getRestaurants", () => {
  return getRestaurants();
})

export const getRestaurantThunk = createAsyncThunk("app/getRestaurant", (restaurantId) => {
  return getRestaurant(restaurantId);
})


const appSlice = createSlice({
  name: "app",
  initialState: {
    restaurants: [],
    current: {},
    isLoadingRestaurants: true,
    isLoadingRestaurant: true
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRestaurantsThunk.fulfilled, (state, action) => {
      state.restaurants = action.payload;
      state.isLoadingRestaurants = false;
    });
    builder.addCase(getRestaurantThunk.fulfilled, (state, action) => {
      state.current = action.payload;
      state.isLoadingRestaurant = false;
    });
  }
});

export const {} = appSlice.actions;
export default appSlice.reducer;