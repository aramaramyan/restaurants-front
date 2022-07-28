import starLined from "./../icons/star_lined.svg";
import starHalfFilled from "./../icons/star_half_filled.svg";
import starFilled from "./../icons/star_filled.svg";

export default function printRateStars(rate) {
  const starArr = [starLined, starLined, starLined, starLined, starLined];

  if(parseFloat(rate) === parseInt(rate)) {
    starArr.fill(starFilled, 0, rate);
  } else {
    starArr.fill(starFilled, 0, rate);
    starArr[parseInt(rate)] = starHalfFilled;
  }

  return starArr;
}