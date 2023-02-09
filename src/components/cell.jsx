import React, { useState } from "react";
import Axios from "axios";
import { Outlet, Link, useLocation } from "react-router-dom";
import { UserData } from "./data";
import "./style.css";
import BarChart from "./barchart";
import LineChart from "./linechart";
import PieChart from "./piechart";

export const Cell = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Cell Current",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <>
      <div className="container">
        <div>
          <div style={{ width: 500 }}>
            <BarChart chartData={userData} />
          </div>
          <div style={{ width: 500 }}>
            <LineChart chartData={userData} />
          </div>
          <div style={{ width: 200 }}>
            <PieChart chartData={userData} />
          </div>
        </div>
        <div>
          <div style={{ width: 500 }}>
            <BarChart chartData={userData} />
          </div>
          <div style={{ width: 500 }}>
            <LineChart chartData={userData} />
          </div>
          <div style={{ width: 200 }}>
            <PieChart chartData={userData} />
          </div>
        </div>
      </div>
    </>
  );
};
