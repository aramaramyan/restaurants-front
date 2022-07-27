import { useParams, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import rateCalculator from "../../helpers/rateCalculator";
import Navbar from "../../components/Navbar/Navbar";
import PhotoStack from "../../components/PhotoSlider/PhotoSlider";
import "./RestaurantPage.scss";
import RateStars from "../../components/RateStars/RateStars";

export default function RestaurantPage() {
  const { id } = useParams();
  const restaurant = useSelector(state => state.app.restaurants).find(item => item.id === +id);
  const {
    name,
    reviews,
    rates,
    phone,
    location,
    webPage,
    openTime,
    kitchenType,
    images
  } = restaurant;
  const rate = rateCalculator(rates);
  const navigate = useNavigate();

  function goToRestaurants() {
    navigate("/restaurants");
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="RestaurantPage">
          <div className="RestaurantPage__navigation">
            <p className="RestaurantPage__navigation_route" onClick={goToRestaurants}>Restaurants</p>
            <p>-</p>
            <p className="RestaurantPage__navigation_route">{name}</p>
          </div>
          <div className="RestaurantPage__top">
            <div className="RestaurantPage__top_images">
              <PhotoStack images={images}/>
            </div>
            <div className="RestaurantPage__top_description">
              <div className="contacts">
                <p>{ location }</p>
                <p>{ phone }</p>
                <a href={ webPage } target="_blank">Web Page</a>
                <p>{ openTime }</p>
              </div>
              <div className="title">
                <h1>{ name }</h1>
                <RateStars rate={rate} />
              </div>
              <div className="kitchen">
                <h3>TYPE OF KITCHEN</h3>
                <ul>
                  {kitchenType.map((type, index) => <li key={index}>{ type }</li>)}
                </ul>
              </div>
            </div>
            <div className="RestaurantPage__bottom">

            </div>
          </div>
        </div>
      </div>
    </>
  );
}