import RestaurantItem from "../RestaurantItem/RestaurantItem";
import "./RestaurantsList.scss"

export default function RestaurantsList({ restaurants }) {
  return (
    <div className="RestaurantsList">
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
  );
}