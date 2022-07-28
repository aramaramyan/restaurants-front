import msToTime from "../../helpers/msToTime";
import RateStars from "../RateStars/RateStars";
import userIcon from "./../../icons/user.svg";
import "./ReviewItem.scss";

export default function ReviewItem({name, review, rate, date}) {
  const currentDate = Date.now();
  const convertedDate = msToTime(currentDate - date);

  return (
    <div className="ReviewItem">
      <div className="ReviewItem__userPhoto">
        <img src={userIcon} className="ReviewItem__userPhoto_icon" alt="User Icon"/>
      </div>
      <div className="ReviewItem__content">
        <div className="ReviewItem__content_header">
          <p>{name}</p>
          <p>{`Reviewed ${convertedDate} ago`}</p>
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