import Navbar from "../../components/Navbar/Navbar";
import MapContainer from "../../components/Map/MapContainer";
import RestaurantsListContainer from "../../components/RestaurantsList/RestaurantsListContainer";
import "./RestaurantsPage.css";

export default function RestaurantsPage({ restaurants }) {
  return (
    <div className="RestaurantsPage">
      <Navbar />
      <div className="RestaurantsPage__content">
        <RestaurantsListContainer/>
        <MapContainer/>
      </div>
    </div>
  );
}