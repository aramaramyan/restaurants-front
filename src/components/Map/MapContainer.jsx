import {useEffect, useRef} from "react";
import mapboxGl from "mapbox-gl";
import {useSelector} from "react-redux";
import mapPopup from "../../helpers/mapPopup";
import mapIcon from "./../../icons/map.svg";
import "./Map.scss";

mapboxGl.accessToken = "pk.eyJ1IjoiYXJhbWFyYW15YW4iLCJhIjoiY2w2NWJzc3JjMHZ3NTNkcDQ0dXVpaHRzcSJ9.xKxDvbe_I5tbKEk3UjL_yw";

export default function MapContainer() {
  const { lng, lat, zoom } = useSelector(state => state.app.coordinates);
  const { name, location, openTime, imgUrl, mLng, mLat } = useSelector(state => state.app.marker);
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = new mapboxGl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom,
    });

    if(mLng && mLat) {
      const popupHTML = mapPopup(name, location, openTime, imgUrl);

      const marker = new mapboxGl.Marker()
        .setLngLat([mLng, mLat])
        .addTo(map);

      const popup = new mapboxGl.Popup({ offset: 30, closeButton: false})
        .setLngLat([mLng, mLat])
        .setHTML(popupHTML)
        .addTo(map);
    }

    return () => map.remove();
  }, [lng, lat]);

  return(
    <div className="MapContainer">
      <div className="MapContainer__title">
        <h2>MAP</h2>
        <img src={mapIcon} alt="List Icon"/>
      </div>
      <div ref={mapContainerRef} className="MapContainer__content"/>
      <div className="MapContainer__footer">© 2022 ARAM ARAMYAN - ALL RIGHTS RESERVED</div>
    </div>
  );
}