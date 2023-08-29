import Map, {
  FullscreenControl,
  GeolocateControl,
  Marker,
  NavigationControl,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Station from "../models/stations";
import { Link } from "react-router-dom";

interface StationProp {
  stations: Station[];
}

const token = process.env.REACT_APP_MAPBOXTOKEN;
function MapBox({ stations }: StationProp): JSX.Element {
  function navigateToStation(station: Station) {
    <Link to={station.contentPath}></Link>;
  }

  const pins = stations.map((s: Station, i: number) => (
      <Marker
        key={i}
        longitude={s.longitude}
        latitude={s.latitude}
        anchor="bottom"
      ></Marker>
  ));

  return (
    <div>
      <Map
        mapboxAccessToken={token}
        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 10,
        }}
        style={{ width: "100vw", height: "100vh" }}
        mapStyle="mapbox://styles/mapbox/navigation-night-v1"
      >
        {pins}
        <FullscreenControl position="top-left" />
        <GeolocateControl position="top-left" />
        <NavigationControl position="top-left" />
      </Map>
    </div>
  );
}
export default MapBox;
