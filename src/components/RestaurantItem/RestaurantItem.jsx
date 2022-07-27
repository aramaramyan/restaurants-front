import {useNavigate} from "react-router";
import rateCalculator from "../../helpers/rateCalculator";
import RateStars from "../RateStars/RateStars";
import "./RestaurantItem.scss";

export default function RestaurantItem({ id, name, logo, rates, location, openTime }) {
  const rate = rateCalculator(rates);
  const navigate = useNavigate();

  function navToRestaurant() {
    navigate(`/restaurants/${id}`);
  }

  return (
    <div className="RestaurantItem" onClick={navToRestaurant}>
      <div className="RestaurantItem__logo">
        <img src={logo} alt="Restaurant Logo"/>
      </div>
      <div className="RestaurantItem__content">
        <h3 className="RestaurantItem__content_name">{name}</h3>
        <RateStars rate={rate}/>
        <p className="RestaurantItem__content_location">{location}</p>
        <p className="RestaurantItem__content_openTime">{openTime}</p>
      </div>
    </div>
  );
}