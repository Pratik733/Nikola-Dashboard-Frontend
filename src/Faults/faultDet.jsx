import React, { useState } from "react";
import Axios from "axios";
import { Outlet, Link, useLocation } from "react-router-dom";

import LocationCityIcon from "@mui/icons-material/LocationCity";
import SouthAmericaIcon from "@mui/icons-material/SouthAmerica";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import SensorsIcon from '@mui/icons-material/Sensors';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import BatteryAlertIcon from '@mui/icons-material/BatteryAlert';
// import "../../";
import Navbar from "../components/navbar";

export const FaultDetection = () => {
  // console.log(props);
  // const loc = useLocation();
  // console.log(loc.state.data[0]);
  // const data = loc.state.data[0];
  // console.log(data);
  return (
    <div className="w-full">
      <div className="home">
        <div className="w-full relative h-auto overflow-hidden bg-white border-0  flex items-center flex-col justify-center">
          {/* <img src="/images/landscape/6.svg" className="absolute object-cover w-full h-full" /> */}
          <div className="container relative z-10 flex items-center">
            <div className="relative z-10 flex flex-col items-center w-full">
              <h1 className="font-bold leading-tight text-center text-black text-7xl">
                Types of Faults
              </h1>
            </div>
          </div>
        </div>
        {/* <Navbar /> */}
        {/* <h2>Fault Detection</h2> */}
        <div className="container">

        <div className="md:w-1/2 p-4 ">
            <div className="border border-gray-200 p-6 rounded-lg bg-white drop-shadow-2xl  ">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <BatteryAlertIcon />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2"><Link to='/battery-faults'>Battery Faults</Link></h2>
              <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
            </div>
          </div>
          <div className="md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg bg-white drop-shadow-2xl">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <SensorsIcon />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2"> <Link to='/sensor-faults'>Sensor Faults</Link> </h2>
              <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
            </div>
          </div>
          <div className="md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg bg-white drop-shadow-2xl">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <WarningAmberIcon />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2"><Link to='/actuator-faults'>Actuator Faults </Link></h2>
              <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
            </div>
          </div>
        </div>
        {/* <div className="container">
          <button className="fbutton">
            <Link
              className="black"
              to="/battery"
              state={{ batteryid: data.Batt_ID }}
            >
              Battery ID
            </Link>
          </button>
        </div> */}
      </div>
    </div>
  );
};
