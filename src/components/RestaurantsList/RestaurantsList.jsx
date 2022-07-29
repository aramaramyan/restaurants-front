import RestaurantItemContainer from "../RestaurantItem/RestaurantItemContainer";
import listIcon from "./../../icons/list.svg";
import "./RestaurantsList.scss"

export default function RestaurantsList({ restaurants }) {
  return (
    <div className="RestaurantsList">
      <div className="RestaurantsList__title">
        <h2>RESTAURANTS</h2>
        <img src={listIcon} alt="List Icon"/>
      </div>
      <div className="RestaurantsList__content">
        {restaurants.map(restaurant => {
          return <RestaurantItemContainer
            key={restaurant.id}
            restaurant={restaurant}
          />;
        })}
      </div>
    </div>
  );
}