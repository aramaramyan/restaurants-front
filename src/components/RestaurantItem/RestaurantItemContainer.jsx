import {useNavigate} from "react-router";
import { useDispatch } from "react-redux";
import { setCoordinates, setMarker } from "../../store/appSlice";
import RestaurantItem from "./RestaurantItem";

export default function RestaurantItemContainer({ restaurant }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {name, location, openTime, images, coordinates: { lng, lat } } = restaurant;


  function showInMap() {
    dispatch(setCoordinates({lng, lat, zoom: 15}));
    dispatch(setMarker({name, location, openTime, imgUrl: images[1], mLng: lng, mLat: lat}));
  }

  function navToRestaurant() {
    navigate(`/restaurants/${restaurant.id}`);
  }

  return <RestaurantItem
    restaurant={restaurant}
    showInMap={showInMap}
    navToRestaurant={navToRestaurant}
  />
}