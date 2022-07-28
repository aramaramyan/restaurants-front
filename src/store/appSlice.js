import {createSlice, createAsyncThunk, current} from "@reduxjs/toolkit";
import getRestaurants from "../services/getRestaurants";
import getRestaurant from "../services/getRestaurant";
import sendReview from "../services/sendReview";

export const getRestaurantsThunk = createAsyncThunk("app/getRestaurants", () => {
  return getRestaurants();
});

export const getRestaurantThunk = createAsyncThunk("app/getRestaurant", (restaurantId) => {
  return getRestaurant(restaurantId);
});

export const sendReviewThunk = createAsyncThunk("app/sendReview", ({id, review, setReviewsLocal}) => {
  return sendReview(id, review, setReviewsLocal);
});

const appSlice = createSlice({
  name: "app",
  initialState: {
    restaurants: [],
    current: {},
    isLoadingRestaurants: true,
    isLoadingRestaurant: true
  },
  reducers: {
    setReviews(state, action) {
      state.current = {
        ...state.current,
        reviews: action.payload
      }
    }
  },
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

export const {setReviews} = appSlice.actions;
export default appSlice.reducer;