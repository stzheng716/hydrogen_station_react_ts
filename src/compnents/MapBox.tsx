import Map, {
  FullscreenControl,
  GeolocateControl,
  Marker,
  NavigationControl,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Station from "../models/stations";
import { Button } from "@material-tailwind/react";

interface StationProp {
  stations: Station[];
  handleGeolocationUpdate: (evt: any) => void;
}

const token = process.env.REACT_APP_MAPBOXTOKEN;

function MapBox({
  stations,
  handleGeolocationUpdate,
}: StationProp): JSX.Element {
  // const CustomPopup = () => {
  //   return (
  //     <Popup
  //       latitude={marker.latitude}
  //       longitude={marker.longitude}
  //       onClose={closePopup}
  //       closeButton={true}
  //       closeOnClick={false}
  //       offsetTop={-30}
  //      >
  //       <p>{marker.name}</p>
  //     </Popup>
  //   )};


  const pins = stations.map((s: Station) => {
    let color: string = "black";

    if (s.h70CurrentStatus === "1") {
      color = "green";
    } else if (s.h70CurrentStatus === "2") {
      color = "yellow";
    } else if (s.h70CurrentStatus === "3") {
      color = "red";
    } else if (s.h70CurrentStatus === "6") {
      color = "blue";
    }

    //   openPopup = (index) => {
    //     this.setSelectedMarker(index)
    // }

    return (
      <>
        <Marker
          key={`marker-${s.stationid}`}
          longitude={s.longitude}
          latitude={s.latitude}
          color={color}
        >
          {/* <div onClick={() => openPopup(index)}>
            <span><b>{}</b></span>
          </div> */}
        </Marker>
      </>
    );
  });

  return (
    <div key="div-map">
      <Map
        mapboxAccessToken={token}
        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 10,
        }}
        style={{ width: "100vw", height: "100vh" }}
        mapStyle="mapbox://styles/mapbox/navigation-night-v1"
        key="map"
      >
        {pins}
        <Button>
          <GeolocateControl
            position="top-left"
            onGeolocate={handleGeolocationUpdate}
          />
        </Button>
        <FullscreenControl position="top-left" />
        <NavigationControl position="top-left" />
      </Map>
    </div>
  );
}
export default MapBox;
