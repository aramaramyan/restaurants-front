import userIcon from "./../../icons/user.svg";
import "./ReviewItem.scss";
import RateStars from "../RateStars/RateStars";

export default function ReviewItem({name, review, rate, date}) {
  return (
    <div className="ReviewItem">
      <div className="ReviewItem__userPhoto">
        <img src={userIcon} className="ReviewItem__userPhoto_icon" alt="User Icon"/>
      </div>
      <div className="ReviewItem__content">
        <div className="ReviewItem__content_header">
          <p>{name}</p>
          <p>{date}</p>
        </div>
        <div className="ReviewItem__content_text">
          <p>{review}</p>
        </div>
        <div className="ReviewItem__content_footer">
          { rate && (
            <>
              <p className="rateText">Rate:</p>
              <RateStars rate={rate}/>
            </>
          )}
        </div>
      </div>
    </div>
  );
}