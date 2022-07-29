import {useEffect, useRef, useState} from "react";
import mapboxGl from "mapbox-gl"
import "./Map.scss"

mapboxGl.accessToken = "pk.eyJ1IjoiYXJhbWFyYW15YW4iLCJhIjoiY2w2NWJzc3JjMHZ3NTNkcDQ0dXVpaHRzcSJ9.xKxDvbe_I5tbKEk3UjL_yw";

export default function MapContainer() {
  const mapContainerRef = useRef(null);
  const [lng, setLng] = useState(44.511693);
  const [lat, setLat] = useState(40.178546);
  const [zoom, setZoom] = useState(10);

  useEffect(() => {
    const map = new mapboxGl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });

    const marker = new mapboxGl.Marker()
      .setLngLat([44.511356, 40.178211])
      .addTo(map);

    const popup = new mapboxGl.Popup({ offset: 30 })
      .setLngLat([44.511356, 40.178211])
      .setHTML('<h1>Hello World!</h1>')
      .addTo(map);

    return () => map.remove();
  }, [])

  return(
    <div className="MapContainer">
      <div ref={mapContainerRef} className="MapContainer__content"/>
    </div>
  );
}