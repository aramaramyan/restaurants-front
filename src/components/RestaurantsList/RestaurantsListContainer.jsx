import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import RestaurantsList from "./RestaurantsList";
import Loader from "../Loader/Loader";
import { getRestaurantsThunk } from "../../store/appSlice";

export default function RestaurantsListContainer() {
  const restaurants = useSelector(state => state.app.restaurants);
  const isLoading = useSelector(state => state.app.isLoadingRestaurants);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurantsThunk());
  }, []);

  return isLoading ? <Loader /> : <RestaurantsList restaurants={restaurants} />
}