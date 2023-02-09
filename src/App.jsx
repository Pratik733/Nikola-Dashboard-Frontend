import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Battery } from "./components/battery";
import { Battery2 } from "./components/battery2";
import { BatteryAnalysis } from "./components/batteryAnalysis";
import { Cell } from "./components/cell";
import { Cellinfo } from "./components/cellinfo";
import { FaultDetection } from "./components/faultDet";
import { Indexdash } from "./components/indexdash";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Signupd from "./components/signup copy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Indexdash />} />
        <Route path="signup" element={<Signup />} />
        <Route path="signupd" element={<Signupd />} />
        <Route path="login" element={<Login />} />
        <Route path="fault-detection" element={<FaultDetection />} />
        <Route path="battery" element={<Battery />} />
        <Route path="battery-analysis" element={<BatteryAnalysis />} />
        <Route path="battery2" element={<Battery2 />} />
        <Route path="cell-info" element={<Cellinfo />} />
        <Route path="cell" element={<Cell />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
