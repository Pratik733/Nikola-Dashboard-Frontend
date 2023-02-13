import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Outlet, Link, Route } from "react-router-dom";

import Navbar from "../components/navbar";

import LocationCityIcon from "@mui/icons-material/LocationCity";
import SouthAmericaIcon from "@mui/icons-material/SouthAmerica";
import ElectricCarIcon from "@mui/icons-material/ElectricCar";
import PersonIcon from "@mui/icons-material/Person";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import Battery80Icon from "@mui/icons-material/Battery80";
import HdrStrongIcon from "@mui/icons-material/HdrStrong";
import PowerIcon from "@mui/icons-material/Power";
import BoltIcon from "@mui/icons-material/Bolt";
import EmojiTransportationIcon from "@mui/icons-material/EmojiTransportation";

export const Indexdash = () => {
  const [vid, setVid] = useState(""); //V123456789
  const [vdata, setVdata] = useState([{}]);
  const [filteredData, setFilteredData] = useState();
  const [searchVal, setSearchVal] = useState('');

  // const vdata = [{ "Batt_ID": "Batt1", "Batt_Lvl": "70", "Charge_S": "Charge", "Energ_Conspn": "4", "Owner_Name": "Ravi Kumar", "Region": "South", "Rem_rnge": "180", "State": "Karnataka", "Veh_No": "KA12345", "Veh_Usg_Patter": "City Driving", "Vehicle_ID": "V123456789", "Vehicle_Stat": "Active" },
  // { "Batt_ID": "Batt2", "Batt_Lvl": "55", "Charge_S": "Discharge", "Energ_Conspn": "6", "Owner_Name": "Praveen", "Region": "West", "Rem_rnge": "170", "State": "Maharashtra", "Veh_No": "MH67890", "Veh_Usg_Patter": "Long Distance", "Vehicle_ID": "V987654321", "Vehicle_Stat": "Inactive" },
  // { "Batt_ID": "Batt2", "Batt_Lvl": "55", "Charge_S": "Discharge", "Energ_Conspn": "6", "Owner_Name": "Praveen", "Region": "West", "Rem_rnge": "170", "State": "Maharashtra", "Veh_No": "MH67890", "Veh_Usg_Patter": "Long Distance", "Vehicle_ID": "V987654321", "Vehicle_Stat": "Inactive" },
  // { "Batt_ID": "Batt2", "Batt_Lvl": "55", "Charge_S": "Discharge", "Energ_Conspn": "6", "Owner_Name": "Praveen", "Region": "West", "Rem_rnge": "170", "State": "Maharashtra", "Veh_No": "MH67890", "Veh_Usg_Patter": "Long Distance", "Vehicle_ID": "V987654321", "Vehicle_Stat": "Inactive" },
  // { "Batt_ID": "Batt2", "Batt_Lvl": "55", "Charge_S": "Discharge", "Energ_Conspn": "6", "Owner_Name": "Praveen", "Region": "West", "Rem_rnge": "170", "State": "Maharashtra", "Veh_No": "MH67890", "Veh_Usg_Patter": "Long Distance", "Vehicle_ID": "V987654321", "Vehicle_Stat": "Inactive" },
  // { "Batt_ID": "Batt2", "Batt_Lvl": "55", "Charge_S": "Discharge", "Energ_Conspn": "6", "Owner_Name": "Praveen", "Region": "West", "Rem_rnge": "170", "State": "Maharashtra", "Veh_No": "MH67890", "Veh_Usg_Patter": "Long Distance", "Vehicle_ID": "V987654321", "Vehicle_Stat": "Inactive" },
  // ];


  const getData = async () => {
    try {
      const response = await fetch('	http://13.232.202.23/', {
        method: 'GET',
      });
      const data = await response.json();
      console.log(data.data);
      // setVdata(ddata);
      setVdata(data.data);
      setFilteredData(data.data);
      setVid(data.data[0].Vehicle_ID);
    } catch (error) {
      console.error(error);
    }
  };


  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    if (vid != "") {
      const Data = vdata.filter((obj) => obj.Vehicle_ID == vid);
      setFilteredData(Data);
      setSearchVal("");
      console.log(Data);
      console.log(vid);
    }
  }, [vid]);

  return (
    <div className="w-full">
      {
        vdata && filteredData ? (
          <div className="home">

            <div className="relative w-full h-auto overflow-hidden bg-white border-0  flex items-center flex-col justify-center">
              {/* <img src="/images/landscape/6.svg" className="absolute object-cover w-full h-full" /> */}
              <div className="container relative z-10 flex items-center">
                <div className="relative z-10 flex flex-col items-center w-full">
                  <h1 className="font-bold leading-tight text-center text-black text-7xl">
                    NIKOLA CHARGING PVT LTD
                  </h1>
                  <h1 className="font-medium leading-tight text-center text-black text-4xl">
                    Battery OEM Dashboard
                  </h1>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-row justify-between p-4">

              <div className="relative w-[20rem] border-l-black" >
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
                <div className="relative ">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  </div>
                  <input value={searchVal} onChange={(e) => setSearchVal(e.target.value)} type="text" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-white focus:ring-blue-500 focus:border-blue-500 " placeholder="Search Vehicle ID" />
                </div>
                <div id="dropdown" className="z-10 absolute top-13 bg-white divide-y divide-gray-100 rounded-lg shadow w-full">
                  <ul className=" text-sm text-gray-700" aria-labelledby="dropdown-button">
                    {
                      searchVal ?
                        (vdata
                          .filter((map) => {
                            const searchTerm = searchVal.toString().toLowerCase();
                            const fullid = map.Vehicle_ID.toString().toLowerCase();

                            return (
                              searchTerm &&
                              fullid.startsWith(searchTerm) &&
                              fullid !== searchTerm
                            );
                          })
                          // .slice(0, 10)
                          .map((data) => (
                            <li key={data.Vehicle_ID}>
                              <button type="button" onClick={() => setVid(data.Vehicle_ID)} className="inline-flex w-full px-4 py-1 hover:bg-gray-100">{data.Vehicle_ID}</button>
                            </li>
                          ))
                        ) : (
                          <></>
                        )
                    }
                  </ul>
                </div>
              </div>
              <div className="sel">
                <label>Vehicle ID : </label>
                <select
                  inputMode="mulitple"
                  onChange={(event) => {
                    setVid(event.target.value);
                  }}
                >
                  {
                    vdata.map((data) => (
                      <option selected={vid == data.Vehicle_ID} key={data.Vehicle_ID}>{data.Vehicle_ID}</option>
                    ))
                  }
                </select>
              </div>
            </div>


            <div className="details">
              <h2 className="text-center font-bold text-4xl underline mb-4">Vehicle Details</h2>

              <div className="container">
                <div className="widget">
                  <div className="left">
                    <span className="title">State</span>
                    <p className="num">{filteredData[0].State}</p>
                  </div>
                  <div className="right">
                    <LocationCityIcon
                      className="icon"
                      style={{
                        color: "#F7B924",
                      }}
                    />
                  </div>
                </div>
                <div className="widget">
                  <div className="left">
                    <span className="title">Region</span>
                    <p className="num">{filteredData[0].Region}</p>
                  </div>
                  <div className="right">
                    <SouthAmericaIcon
                      className="icon"
                      style={{
                        color: "#4ECA8A",
                      }}
                    />
                  </div>
                </div>
                <div className="widget">
                  <div className="left">
                    <span className="title">Vehicle No.</span>
                    <p className="num">{filteredData[0].Veh_No}</p>
                  </div>
                  <div className="right">
                    <ElectricCarIcon
                      className="icon"
                      style={{
                        color: "#DD3B62",
                      }}
                    />
                  </div>
                </div>
                <div className="widget">
                  <div className="left">
                    <span className="title">Owner Name</span>
                    <p className="num">{filteredData[0].Owner_Name}</p>
                  </div>
                  <div className="right">
                    <PersonIcon />
                  </div>
                </div>
                <div className="widget">
                  <div className="left">
                    <span className="title">Vehicle Stat</span>
                    <p className="num">{filteredData[0].Vehicle_Stat}</p>
                  </div>
                  <div className="right">
                    <ToggleOnIcon />
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="widget">
                  <div className="left">
                    <span className="title">Battery Level</span>
                    <p className="num">{filteredData[0].Batt_Lvl}</p>
                  </div>
                  <div className="right">
                    <Battery80Icon
                      className="icon"
                      style={{
                        color: "#4ECA8A",
                      }}
                    />
                  </div>
                </div>
                <div className="widget">
                  <div className="left">
                    <span className="title">Rem Range</span>
                    <p className="num">{filteredData[0].Rem_rnge}</p>
                  </div>
                  <div className="right">
                    <HdrStrongIcon />
                  </div>
                </div>
                <div className="widget">
                  <div className="left">
                    <span className="title">Charge</span>
                    <p className="num">{filteredData[0].Charge_S}</p>
                  </div>
                  <div className="right">
                    <PowerIcon
                      className="icon"
                      style={{
                        color: "#4ECA8A",
                      }}
                    />
                  </div>
                </div>
                <div className="widget">
                  <div className="left">
                    <span className="title">Energy Consumption</span>
                    <p className="num">{filteredData[0].Energ_Conspn}</p>
                  </div>
                  <div className="right">
                    <BoltIcon
                      className="icon"
                      style={{
                        color: "#F7B924",
                      }}
                    />
                  </div>
                </div>
                {/* <div className="widget">
                  <div className="left">
                    <span className="title">Vehicle Usage Pattern</span>
                    <p className="num">{filteredData[0].Veh_Usg_Patter}</p>
                  </div>
                  <div className="right">
                    <EmojiTransportationIcon
                      className="icon"
                      style={{
                        color: "#DD3B62",
                      }}
                    />
                  </div>
                </div> */}
              </div>
            </div>

            <div className="bcls">
              <button className="fbutton">
                <Link
                  className="link"
                  to="/fault-detection"
                >
                  Fault Detection
                </Link>
              </button>
              <button className="fbutton">
                <Link
                  className="link"
                  to={`/battery-analysis/${filteredData[0].Batt_ID}`}
                >
                  Battery Analysis
                </Link>
              </button>
            </div>

          </div>
        ) : (
          <div>
            <h1>No data availabe or server Error</h1>
          </div>
        )
      }
    </div>
  );
};
