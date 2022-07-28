import {useEffect} from "react";
import {useNavigate, useParams} from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurantThunk } from "../../store/appSlice";
import rateCalculator from "../../helpers/rateCalculator";
import Navbar from "../../components/Navbar/Navbar";
import PhotoStack from "../../components/PhotoSlider/PhotoSlider";
import RateStars from "../../components/RateStars/RateStars";
import ReviewForm from "../../components/ReviewForm/ReviewForm";
import ReviewList from "../../components/ReviewList/ReviewList";
import "./RestaurantPage.scss";
import Loader from "../../components/Loader/Loader";

export default function RestaurantPage() {
  const { id } = useParams();
  const restaurantFromRedux = useSelector(state => state.app.current);
  const restaurant =  {
    "id": 1,
    "name": "Sherep",
    "reviews": [
      {
        id: "l64nf8mfq5w30r0szog",
        name: "Samvel Gasparyan",
        rate: 5,
        review: "One of the best places I visited. Service is top! Food so delicious, especially hinkaliDefinitely recommend to visit!",
        date: 1658897683122
      },
      {
        id: "l64nf9i5e1fz7g58hrt",
        name: "Nver Gevorgyan",
        rate: 5,
        review: "Everything was super delicious and the service is great. The fried khinkali is amazing. Our waiter Argijthi was very friendly and attentive.",
        date: 1658897704724
      }
    ],
    "rates": [5, 5, 4, 5],
    "phone": "+374 43 600880",
    "location": "Amiryan str. 1, Yerevan 0010 Armenia",
    "webPage": "https://www.yeremyanprojects.com/en/restaurants/sherep",
    "openTime": "09:30 AM - 12:00 AM",
    "kitchenType": ["Middle Eastern", "Eastern European", "Central European", "Armenian", "Barbecue", "Healthy"],
    "images": [
      "https://drive.google.com/uc?id=1fTtZBdfzo-6PqGPtj_PV7H1WQ9c7bhdW",
      "https://drive.google.com/uc?id=1HQlE1p-IitTeVxUsMSmqmLJC_umHwDkX",
      "https://drive.google.com/uc?id=1d9AkRv6jISZUEhzrW3m-FTOxC5dXwt-S",
      "https://drive.google.com/uc?id=1VQ5JJCtwEq2qDfTdMztvrgx5ynMsvtCt",
      "https://drive.google.com/uc?id=1aUw007erNJzmhKP6cErogAz21rh8vQPQ",
    ]
  };
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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurantThunk(id));
  }, []);

  function goToRestaurants() {
    navigate("/restaurants");
  }

  // return (
  //   <>
  //     <Navbar />
  //     <div className="container">
  //       <div className="RestaurantPage">
  //         <div className="RestaurantPage__navigation">
  //           <p className="RestaurantPage__navigation_route" onClick={goToRestaurants}>Restaurants</p>
  //           <p>-</p>
  //           <p className="RestaurantPage__navigation_route">{name}</p>
  //         </div>
  //         <div className="RestaurantPage__top">
  //           <div className="RestaurantPage__top_images">
  //             <PhotoStack images={images}/>
  //           </div>
  //           <div className="RestaurantPage__top_description">
  //             <div className="contacts">
  //               <p>{ location }</p>
  //               <p>{ phone }</p>
  //               <a href={ webPage } target="_blank">Web Page</a>
  //               <p>{ openTime }</p>
  //             </div>
  //             <div className="info">
  //               <div className="info__left">
  //                 <div className="title">
  //                   <h1>{ name }</h1>
  //                   <RateStars rate={rate} />
  //                 </div>
  //                 <div className="kitchen">
  //                   <h3>TYPE OF KITCHEN</h3>
  //                   <ul>
  //                     {kitchenType.map((type, index) => <li key={index}>{ type }</li>)}
  //                   </ul>
  //                 </div>
  //               </div>
  //               <div className="info__right">
  //                 <ReviewForm />
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //         <div className="RestaurantPage__bottom">
  //           <ReviewList reviews={reviews}/>
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // );

  return <Loader />
}