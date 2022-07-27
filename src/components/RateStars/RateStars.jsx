import printRateStars from "./../../helpers/printRateStars";
import "./RateStars.scss";



export default function RateStars({ rate }) {
  const rateStars = printRateStars(rate);

  return (
    <div className="RateStars">
      <p>{rate}</p>
      {rateStars.map((star, index) => <img key={index} src={star} alt="Star Icon"/>)}
    </div>
  );
}