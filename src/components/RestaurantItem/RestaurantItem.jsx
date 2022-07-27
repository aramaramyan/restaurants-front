import "./RestaurantItem.scss";

export default function RestaurantItem({ name }) {
  return (
    <div className="RestaurantItem">
      <h1>{name}</h1>
    </div>
  );
}