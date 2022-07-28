import axios from "axios";

export default async function getRestaurants() {
  let result = [];
  await axios.get("http://localhost:3001/restaurants").then(res => {
   result = res.data;
  });

  return result;
}