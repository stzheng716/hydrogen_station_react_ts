import React, { useEffect, useState } from "react";
import "./App.css";
import HydrogenStationsApi from "./api";
import Station from "./models/stations";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import RoutesList from "./components/RoutesList";
import nearbySort from "nearby-sort";
import { ToastContainer } from "react-toastify";
import Loading from "./components/Loading";

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

  async function handleSearch(searchTerm: string) {
    const stations = await HydrogenStationsApi.getZipStations(searchTerm);
    setStations({ stationsData: stations, isLoaded: true });
  }

  //This gets the current location of the user
  async function handleGeolocationUpdate(evt: any) {
    const { latitude, longitude } = evt.coords;

    const coordinates = {
      lat: latitude,
      long: longitude,
    };

    let ascSortedData = await nearbySort(coordinates, stations.stationsData!);
    setStations({ stationsData: ascSortedData, isLoaded: true });

    return coordinates;
  }

  if (!stations.isLoaded || !stations.stationsData) {
    return <Loading />;
  }

  return (
    <>
      <ToastContainer
        position="top-center"
        theme="colored"
        hideProgressBar={false}
      />
      <BrowserRouter>
        <div className="flex flex-col bg-emerald-400">
          <Header handleSearch={handleSearch} />
        </div>

        <div>
          <RoutesList
            stations={stations.stationsData}
            handleGeolocationUpdate={handleGeolocationUpdate}
          />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
