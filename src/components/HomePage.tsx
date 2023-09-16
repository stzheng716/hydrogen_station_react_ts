import React from "react";
import Station from "../models/stations";
import StationCard from "./StationCard";
import MapBox from "./MapBox";

interface HomePageProps {
  stations: Station[];
  handleGeolocationUpdate: (evt: any) => void;
}

function HomePage({ stations, handleGeolocationUpdate }: HomePageProps): JSX.Element {
  return (
    <div className="flex flex-col md:flex-row h-1/4 md:h-auto">
      <div className="w-full md:w-1/3 md:h-screen md:overflow-y-auto bg-gray-800 border-gray-700">
        <h5 className="text-xl font-bold leading-none dark:text-slate-300 pt-4 pl-4">
          Station List by distance from you
        </h5>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700 px-4">
          {stations.map((station: Station) => (
            <StationCard station={station} key={station.stationid} />
          ))}
        </ul>
      </div>
      <div className="w-full h-50vh md:w-2/3 h-1/4 relative order-first md:order-last">
        <MapBox
          stations={stations}
          handleGeolocationUpdate={handleGeolocationUpdate}
        />
      </div>
    </div>
  );
}

export default HomePage