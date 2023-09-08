import React, { useEffect, useState } from "react";
import "./App.css";
import HydrogenStationsApi from "./api";
import Station from "./models/stations";
import StationCard from "./components/StationCard";
import MapBox from "./components/MapBox";
import { BrowserRouter } from "react-router-dom";
import Nav from "./components/Nav";
import Header from "./components/Header";
import RoutesList from "./components/RoutesList";

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
        <div className="flex flex-col bg-emerald-400">
          <Header handleSearch={handleSearch}/>
        </div>

        <RoutesList
        stations={stations.stationsData}
        handleGeolocationUpdate={handleGeolocationUpdate}
        />
      </BrowserRouter>
    </>
  );
}

export default App;
