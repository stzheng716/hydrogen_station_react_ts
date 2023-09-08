import Station from "../models/stations";
import About from "./About";
import HomePage from "./HomePage";
import { Route, Routes, Navigate } from "react-router-dom";

interface RoutesListProps {
  stations: Station[];
  handleGeolocationUpdate: (evt: any) => void;
}

function RoutesList({ stations, handleGeolocationUpdate }: RoutesListProps) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage
            stations={stations}
            handleGeolocationUpdate={handleGeolocationUpdate}
          />
        }
      />
      <Route
        path="/about"
        element={<About />}
      />
    </Routes>
  );
}

export default RoutesList;
