import logo from "./../../img/logo.png"
import "./Navbar.scss";

export default function Navbar() {
  return (
    <div className="Navbar">
      <img src={logo} className="Navbar__logo" alt="Restaurants Logo"/>
    </div>
  );
}