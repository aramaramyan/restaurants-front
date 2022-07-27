import "./RestaurantItem.scss";

export default function RestaurantItem({ name, logo, rates, location, openTime }) {
  return (
    <div className="RestaurantItem">
      <div className="RestaurantItem__logo">
        <img src={logo} alt="Restaurant Logo"/>
      </div>
      <div className="RestaurantItem__content">
        <h3 className="RestaurantItem__content_name">{name}</h3>
        <p className="RestaurantItem__content_rate">{rates}</p>
        <p className="RestaurantItem__content_location">{location}</p>
        <p className="RestaurantItem__content_openTime">{openTime}</p>
        <p></p>
      </div>
    </div>
  );
}