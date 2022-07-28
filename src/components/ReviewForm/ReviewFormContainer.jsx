import {useParams} from "react-router";
import {useDispatch} from "react-redux";
import ReviewForm from "./ReviewForm";
import {sendReviewThunk, setReviews} from "../../store/appSlice";

export default function ReviewFormContainer() {
  const { id } = useParams();
  const dispatch = useDispatch();

  function sendReview(review) {
    dispatch(sendReviewThunk({id, review, setReviewsLocal}));
  }

  function setReviewsLocal(reviews) {
    dispatch(setReviews(reviews));
  }

  return (
    <ReviewForm
      sendReview={sendReview}
    />
  );
}