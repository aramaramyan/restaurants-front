import { useState } from "react";
import starLined from "./../../icons/star_lined.svg";
import starFilled from "./../../icons/star_filled.svg";
import Button from "../Button/Button";
import "./ReviewForm.scss";

const PLACEHOLDER = {
  DEFAULT: "Write your review here...",
  ERROR: "You can't send empty review!",
}

export default function ReviewForm({ sendReview }) {
  const [rate, setRate] = useState(0);
  const [stars, setStars] = useState([starLined, starLined, starLined, starLined, starLined]);
  const [review, setReview] = useState("");
  const [placeholder, setPlaceholder] = useState(PLACEHOLDER.DEFAULT);

  function onHover(index) {
    setStars(prev => [...prev.fill(starFilled, 0, index + 1)]);
  }

  function onLeave(index) {
    if (rate === 0) {
      setStars(prev => [...prev.fill(starLined)]);
    } else if (rate < index + 1){
      setStars(prev => [...prev.fill(starLined, rate - prev.length,)]);
    }
  }

  function clickToRate(index) {
    if(index + 1 < rate) {
      setStars(prev => [...prev.fill(starLined, rate - (prev.length + 1))]);
      setRate(index + 1);
    } else {
      setStars(prev => [...prev.fill(starFilled, 0, index + 1)]);
      setRate(index + 1);
    }
  }

  function handleTextarea(evt) {
    setReview(evt.target.value);
  }

  function onFormSubmit(evt) {
    evt.preventDefault();

    if(review.trim()) {
      const data = {
        rate,
        review,
        date: Date.now()
      }

      sendReview(data);

      setReview("");
      setRate(0);
      setStars(prev => prev.fill(starLined));
      setPlaceholder(PLACEHOLDER.DEFAULT);
    } else {
      setPlaceholder(PLACEHOLDER.ERROR);
    }
  }

  return (
    <div className="ReviewForm">
      <div className="ReviewForm__rate">
        <h3>CLICK TO RATE</h3>
        <div className="ReviewForm__rate_stars">
          {stars.map((star, index) => <img
            key={index}
            src={star}
            alt="Star Icon"
            onMouseOver={() => {
              onHover(index)
            }}
            onMouseLeave={() => {
              onLeave(index)
            }}
            onClick={() => {
              clickToRate(index)
            }}
          />)}
        </div>
      </div>
      <div className="ReviewForm__review">
        <h3>REVIEW</h3>
        <form onSubmit={onFormSubmit}>
          <textarea
            cols="20" rows="10"
            placeholder={placeholder}
            value={review}
            onChange={handleTextarea}
          />
          <div className="ReviewForm__review_button">
            <Button w="200px" h="40px" content="Submit Review" action={onFormSubmit}/>
          </div>
        </form>
      </div>
    </div>
  );
}