import RestaurantsListContainer from "../../components/RestaurantsList/RestaurantsListContainer";
import "./RestaurantsPage.css";

export default function RestaurantsPage({ restaurants }) {
  return (
    <div className="RestaurantsPage">
      <RestaurantsListContainer />
    </div>
  );
}