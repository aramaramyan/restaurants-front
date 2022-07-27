import {Routes, Route, Navigate} from "react-router";
import RestaurantsPage from "./pages/RestaurantsPage/RestaurantsPage";
import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/restaurants" />}/>
        <Route path="/restaurants" element={<RestaurantsPage />}/>
      </Routes>
    </div>
  );
}

export default App;
