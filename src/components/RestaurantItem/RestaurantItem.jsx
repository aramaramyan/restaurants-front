import rateCalculator from "../../helpers/rateCalculator";
import RateStars from "../RateStars/RateStars";
import "./RestaurantItem.scss";
import Button from "../Button/Button";

export default function RestaurantItem({ restaurant, showInMap, navToRestaurant }) {
  const { name, images, rates, location, openTime } = restaurant;
  const rate = rateCalculator(rates);

  return (
    <div className="RestaurantItem" onClick={showInMap}>
      <div className="RestaurantItem__logo">
        <img src={images[0]} alt="Restaurant Logo"/>
      </div>
      <div className="RestaurantItem__content">
        <div className="RestaurantItem__content_header">
          <h3>{name}</h3>
          <Button w="170px" h="30px" content="View Restaurant" action={navToRestaurant} />
        </div>
        <RateStars rate={rate}/>
        <p className="RestaurantItem__content_location">{location}</p>
        <p className="RestaurantItem__content_openTime">{openTime}</p>
      </div>
    </div>
  );
}