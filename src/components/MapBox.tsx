import Map, {
  GeolocateControl,
  NavigationControl,
  Popup,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Station from "../models/stations";
import MarkerComp from "./Markers";
import { useState } from "react";
import getColor from "../utils/getColor";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface StationProps {
  stations: Station[];
  handleGeolocationUpdate: (evt: any) => void;
}

const token = process.env.REACT_APP_MAPBOXTOKEN;

function MapBox({
  stations,
  handleGeolocationUpdate,
}: StationProps): JSX.Element {
  const [selectedStation, setSelectedStation] = useState<any>({
    popStatus: false,
  });

  function onClose() {
    setSelectedStation({popStatus: false})
  }

  function getStatus(status: string) {
    if (status === "1") {
      return "Available";
    } else if (status === "2") {
      return "Limited";
    } else if (status === "3") {
      return "Offline";
    } else if (status === "6") {
      return "Refresh";
    } else {
      return "Unknown";
    }
  }

  return (
    <div key="div-map">
      <Map
        mapboxAccessToken={token}
        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 10,
        }}
        style={{ width: "100vw", height: "93vh" }}
        mapStyle="mapbox://styles/mapbox/navigation-night-v1"
        key="map"
      >
        {stations.map((s: Station) => (
          <MarkerComp
            station={s}
            setSelectedStation={setSelectedStation}
            key={`marker-comp ${s.stationid}`}
          />
        ))}
        <GeolocateControl
          position="top-left"
          onGeolocate={(evt) => {
            const prom = handleGeolocationUpdate(evt);
            toast.promise(prom!, {
              success: "Station List is now sorted by distance to your location",
              error: "Promise rejected",
            });
          }}
        />
        <NavigationControl position="top-left" />
        {selectedStation.popStatus && (
          <Popup
            longitude={selectedStation.long}
            latitude={selectedStation.lat}
            key={`${selectedStation.long}-${selectedStation.lat}`}
            closeOnClick={false}
            anchor="bottom"
            onClose={onClose}
          >
            <div className="flex-col">
              <h2
                className={`text-${getColor(
                  selectedStation.h70CurrentStatus
                )}-700 font-bold`}
              >
                Status: {getStatus(selectedStation.h70CurrentStatus)}
              </h2>
              <h2 className="font-bold">
                H2 Available(Kg): {selectedStation.capacityKg} Kg
              </h2>
              <Link
                to={`https://www.google.com/maps/search/?api=1&query=${selectedStation.streetAddress}${selectedStation.city}${selectedStation.zipcode}`}
                target="_blank"
              >
                <h2 className="font-bold">
                  {`${selectedStation.streetAddress} 
              ${selectedStation.city} ${selectedStation.zipcode}`}
                </h2>
              </Link>
            </div>
          </Popup>
        )}
      </Map>
    </div>
  );
}

export default MapBox;
