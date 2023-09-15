import { Marker, Popup } from "react-map-gl";
import Station from "../models/stations";
import getColor from "../utils/getColor";

interface MarkerProps {
  station: Station;
  setSelectedStation: (station: any) => any | null;
}
function MarkerComp({
  station,
  setSelectedStation
}: MarkerProps): any {

  return (
    <>
      <Marker
        key={`marker-${station.stationid}`}
        longitude={station.long}
        latitude={station.lat}
        color={getColor(station.h70CurrentStatus)}
        onClick={() => {
          setSelectedStation({ ...station, popStatus: true });
        }}
      ></Marker>
    </>
  );
}

export default MarkerComp;
