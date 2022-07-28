import logo from "./../../img/logo.png"
import "./Loader.scss";

export default function Loader() {
  return (
    <div className="Loader">
      <div className="Loader__rings loader" />
      <p>Loading...</p>
    </div>
  );
}