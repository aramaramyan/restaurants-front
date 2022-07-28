import {useEffect, useState} from "react";
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {getRestaurantThunk} from "../../store/appSlice";
import RestaurantPage from "./RestaurantPage";
import Loader from "../../components/Loader/Loader";

export default function RestaurantPageContainer() {
  const { id } = useParams();
  const restaurant = useSelector(state => state.app.current);
  const isLoading = useSelector(state => state.app.isLoadingRestaurant);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurantThunk(id));
  }, []);

  return isLoading ? <Loader /> : <RestaurantPage restaurant={restaurant}/>
}