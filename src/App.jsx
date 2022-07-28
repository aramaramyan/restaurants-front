import {Routes, Route, Navigate} from "react-router";
import RestaurantsPage from "./pages/RestaurantsPage/RestaurantsPage";
import RestaurantPageContainer from "./pages/RestaurantPage/RestaurantPageContainer";
import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/restaurants" />}/>
        <Route path="/restaurants" element={<RestaurantsPage />}/>
        <Route path="/restaurants/:id" element={<RestaurantPageContainer />}/>
      </Routes>
    </div>
  );
}

export default App;
