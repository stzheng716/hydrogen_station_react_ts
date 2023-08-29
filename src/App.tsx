import React, { useEffect, useState } from "react";
import "./App.css";
import HydrogenStationsApi from "./api";
import Station from "./models/stations";
import StationCard from "./compnents/StationCard";
import MapBox from "./compnents/MapBox";
import { BrowserRouter } from "react-router-dom";

interface StationState {
  stationsData: Station[] | null;
  isLoaded: boolean;
}

function App(): JSX.Element {
  const [stations, setStations] = useState<StationState>({
    stationsData: null,
    isLoaded: false,
  });

  useEffect(function updateStation() {
    getStations();
  }, []);

  async function getStations() {
    const stations = await HydrogenStationsApi.getStations();
    setStations({ stationsData: stations, isLoaded: true });
  }

  if (!stations.isLoaded || !stations.stationsData) {
    return <div className="loading">Loading</div>;
  }

  console.log("stationsData", stations.stationsData);

  return (
    <BrowserRouter>
      <div className="flex flex-col md:flex-row h-screen overflow-hidden">
        <div className="w-full md:w-1/3 h-30vh md:h-screen overflow-y-auto dark:bg-gray-800 dark:border-gray-700">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white p-4">
            Hydrogen Fuel Stations
          </h5>
          <ul className="divide-y divide-gray-200 dark:divide-gray-700 p-4">
            {stations.stationsData!.map((station: any) => (
              <StationCard key={station.id} station={station} />
            ))}
          </ul>
        </div>
        <div className="w-full md:w-2/3 h-70vh md:h-screen relative overflow-hidden order-first md:order-last">
          <MapBox stations={stations.stationsData} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
