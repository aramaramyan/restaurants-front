import axios from "axios";

export default async function getRestaurant(restaurantID) {
  let result = {};
  await axios.get(`http://localhost:3001/restaurants/${restaurantID}`).then(res => {
    result = res.data;
  });

  return result;
}