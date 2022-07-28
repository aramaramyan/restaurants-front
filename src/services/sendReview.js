import axios from "axios";

export default async function sendReview(id, review, setReviewsLocal) {
  await axios.post("http://localhost:3001/reviews", {id, review}, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8'
    },
  }).then(res => {
    setReviewsLocal(res.data);
  })
}