import React, { useEffect, useState } from "react";
import "./App.css";
import HydrogenStationsApi from "./api";
import Station from "./models/stations";
import StationCard from "./compnents/StationCard";
import MapBox from "./compnents/MapBox";
import { NavbarWithSearch } from "./compnents/NavbarWithSearch";
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

  async function handleSearch(zipCode: string) {
    const stations = await HydrogenStationsApi.getZipStations(zipCode);
    setStations({ stationsData: stations, isLoaded: true });
  }

  //This gets the current location of the user
  const handleGeolocationUpdate = (evt: any) => {
    const {latitude, longitude} = evt.coords
  }

  if (!stations.isLoaded || !stations.stationsData) {
    return <div className="loading">Loading</div>;
  }

  return (
    <>
      <BrowserRouter>
        <div className="w-full bg-slate-700">
          <NavbarWithSearch handleSearch={handleSearch} />
        </div>
        <div className="flex flex-col md:flex-row overflow-hidden h-1/4 md:h-auto">
          <div className="w-full md:w-1/3 h-30vh md:h-screen overflow-y-auto dark:bg-gray-800 dark:border-gray-700">
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white p-4">
              Hydrogen Fuel Stations
            </h5>
            <ul className="divide-y divide-gray-200 dark:divide-gray-700 p-4">
              {stations.stationsData.map((station: Station) => (
                <StationCard station={station} key={station.stationid} />
              ))}
            </ul>
          </div>
          <div className="w-full md:w-2/3 h-1/2 md:h-screen relative overflow-hidden order-first md:order-last">
            <MapBox stations={stations.stationsData} handleGeolocationUpdate={handleGeolocationUpdate} />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
