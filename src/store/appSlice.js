import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
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
    isLoadingRestaurant: true,
    coordinates: {
      lng: 44.511693,
      lat: 40.178546,
      zoom: 12
    },
    marker: {
      name: null,
      location: null,
      openTime: null,
      imgUrl: null,
      mLng: null,
      mLat: null,
    }
  },
  reducers: {
    setReviews(state, action) {
      state.current = {
        ...state.current,
        reviews: action.payload
      };
    },

    setCoordinates(state, action) {
      state.coordinates = action.payload;
    },

    setMarker(state, action) {
      state.marker = action.payload;
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

export const {setReviews, setCoordinates, setMarker} = appSlice.actions;
export default appSlice.reducer;