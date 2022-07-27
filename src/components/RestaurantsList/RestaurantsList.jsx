import RestaurantItem from "../RestaurantItem/RestaurantItem";
import "./RestaurantsList.scss"

export default function RestaurantsList({ restaurants }) {
  return (
    <div className="RestaurantsList">
      {restaurants.map(restaurant => {
        return <RestaurantItem
          key={restaurant.id}
          name={restaurant.name}
        />;
      })}
    </div>
  );
}