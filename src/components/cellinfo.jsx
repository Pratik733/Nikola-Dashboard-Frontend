import React, { useState } from "react";
import Axios from "axios";
import { Outlet, Link, useLocation } from "react-router-dom";
import "./style.css";
export const Cellinfo = () => {
  return (
    <>
      <div className="container">
        <h1 className="cell">
          <Link className="r" to="/cell">
            Cell 1
          </Link>
        </h1>
        <h1 className="cell">Cell 2</h1>
        <h1 className="cell">Cell 3</h1>
        <h1 className="cell">Cell 4</h1>
        <h1 className="cell">Cell 5</h1>
        <h1 className="cell">Cell 6</h1>
      </div>
    </>
  );
};
