import { useSelector } from "react-redux";
import Restaurants from "./Restaurants";

export default function RestaurantsContainer() {
  const restaurants = useSelector(state => state.app.restaurants);
  console.log(`:::restaurants:::`, restaurants);

  return <Restaurants restaurants={restaurants}/>
}