import { useNavigate } from "react-router";
import logo from "./../../img/logo.png"
import userIcon from "./../../icons/user.svg";
import "./Navbar.scss";

export default function Navbar() {
  const navigate = useNavigate();

  function goToRestaurants() {
    navigate("/restaurants");
  }

  return (
    <div className="Navbar">
      <img
        src={logo}
        className="Navbar__logo"
        alt="App Logo"
        onClick={goToRestaurants}
      />
      <img
        src={userIcon}
        alt="User Icon"
        className="Navbar__userIcon"
      />
    </div>
  );
}