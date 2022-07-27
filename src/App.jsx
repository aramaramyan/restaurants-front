import RestaurantsContainer from "./pages/Restaurants/RestaurantsContainer";
import './App.scss';
import {Routes, Route, Navigate} from "react-router";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/restaurants" />}/>
        <Route path="/restaurants" element={<RestaurantsContainer />}/>
      </Routes>
    </div>
  );
}

export default App;
