import "./RestaurantItem.scss";

export default function RestaurantItem(props) {
  return (
    <div className="RestaurantItem">
      <h1>{props.name}</h1>
    </div>
  );
}