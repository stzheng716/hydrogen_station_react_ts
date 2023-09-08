import React from "react";
import Station from "../models/stations";
import StatusIcon from "./StatusIcon";
import { Link } from "react-router-dom";

interface StationProp {
  station: Station;
  key: React.Key;
}

function StationCard({ station }: StationProp): JSX.Element {
  return (
    <div className="flow-root" key={`card-${station.stationid}`}>
      <Link
        to={`https://www.google.com/maps/search/?api=1&query=${station.streetAddress}${station.city}${station.zipcode}`}
        target="_blank"
      >
        <li key={`li-${station.stationid}`} className="py-3 sm:py-4">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <Link to={station.contentPath} target="_blank">
                <StatusIcon stationStatus={station.h70CurrentStatus} />
              </Link>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                {station.stationName}
              </p>
              <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                {station.streetAddress} {station.city}
              </p>
            </div>
            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
              H2 Available: {station.capacityKg}Kg
            </div>
          </div>
        </li>
      </Link>
    </div>
  );
}

export default StationCard;
