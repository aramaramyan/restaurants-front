import { useNavigate } from "react-router";
import logo from "./../../img/logo.png"
import "./Navbar.scss";

export default function Navbar() {
  const navigate = useNavigate();

  function goToRestaurants() {
    navigate("/restaurants");
  }

  return (
    <div className="Navbar">
      <div className="container">
        <img
          src={logo}
          className="Navbar__logo"
          alt="Restaurants Logo"
          onClick={goToRestaurants}
        />
      </div>
    </div>
  );
}