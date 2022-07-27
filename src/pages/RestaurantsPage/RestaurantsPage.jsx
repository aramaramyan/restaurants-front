import RestaurantsListContainer from "../../components/RestaurantsList/RestaurantsListContainer";
import MapContainer from "../../components/Map/MapContainer";
import "./RestaurantsPage.css";

export default function RestaurantsPage({ restaurants }) {
  return (
    <div className="RestaurantsPage">
      <RestaurantsListContainer />
      <MapContainer />
    </div>
  );
}