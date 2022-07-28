import RestaurantItem from "../RestaurantItem/RestaurantItem";
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
          return <RestaurantItem
            key={restaurant.id}
            id={restaurant.id}
            name={restaurant.name}
            logo={restaurant.images[0]}
            rates={restaurant.rates}
            location={restaurant.location}
            openTime={restaurant.openTime}
          />;
        })}
      </div>
    </div>
  );
}