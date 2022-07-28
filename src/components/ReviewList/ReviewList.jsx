import ReviewItem from "../ReviewItem/ReviewItem";
import reviewIcon from "./../../icons/reviews.svg";
import "./ReviewList.scss";

export default function ReviewList({ reviews }) {
  return (
    <div className="ReviewList">
      <div className="ReviewList__title">
        <h2>REVIEWS</h2>
        <img src={reviewIcon} alt="Reviews Icon"/>
      </div>
      <div className="ReviewList__content">
        {reviews.map(review => {
          return <ReviewItem
            key={review.id}
            name={review.name}
            review={review.review}
            rate={review.rate}
            date={review.date}
          />
        })}
      </div>
    </div>
  );
}