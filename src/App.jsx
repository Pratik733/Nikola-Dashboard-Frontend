import './App.css';
import { Toaster } from "react-hot-toast";
import { useContext, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation, useNavigate, Navigate } from "react-router-dom";
import { AuthContext } from "./authContext";
import { Battery } from "./Faults/battery";
import { BatteryAnalysis } from "./BatteryaAnalysis/BatteryAnalysis";
import { Cell } from "./components/cell";
import { Cellinfo } from "./components/cellinfo";
import { FaultDetection } from "./Faults/faultDet";
import { Indexdash } from "./Landing/indexdash";
import Login from "./LoginSignup/login";
import Signup from "./LoginSignup/signup";
import BatteryFaults from "./Faults/BatteryFaults";
import { SensorFaults } from "./Faults/SensorFaults";
import ActuatorFaults from "./Faults/ActuatorFaults";
import FaultDetails from "./Faults/FaultDetails";
import InternalShortCircuit from "./Faults/InternalShortCircuit";
import Sidebar from "./Sidebar/sidebar";
import BattCharacteristics from './SetParameters/BattCharacteristics';
import CurrProtection from './SetParameters/CurrProtection';
import TempProtection from './SetParameters/TempProtection';
import VoltProtection from './SetParameters/VoltProtection';
import SetParameters from './SetParameters/SetParameters';
import AuthUser from './Admin/AuthUser';
import CellInfo from './Cell-Info/Cell-info';
import Cells from './Cell-Info/Cells';

function App() {
  const { currentUser } = useContext(AuthContext);
  const history = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!currentUser && (location.pathname !== "/signup")) {
      history("/login");
    }
  }, [currentUser, history]);


  return (
    <div className='flex h-auto flex-row justify-flex-end'>
      <Toaster />

      {location.pathname !== '/login' && location.pathname !== '/signup' ? <Sidebar /> : null}
      
      <Routes >

        {/*       Landing Page                 */}

        <Route path="/" element={<Indexdash />} />

        {/*        Login & Sign-up Pages       */}

        <Route
          path="/signup"
          element={currentUser ? <Navigate to="/" /> : <Signup />}
        />
        <Route
          path="/login"
          element={currentUser ? <Navigate to="/" /> : <Login />}
        />

        {/*              Admin                 */}

        <Route path='/authorize-users' element={<AuthUser />} />

        {/*         Falut Detection Pages      */}

        <Route path="fault-detection" element={<FaultDetection />} />

        <Route path='/battery-faults' element={<BatteryFaults />} />
        <Route path='/sensor-faults' element={<SensorFaults />} />
        <Route path='/actuator-faults' element={<ActuatorFaults />} />
        <Route path='/fault-details/:type' element={<FaultDetails />} />
        <Route path='/battery-faults/internal-short-circuits' element={<InternalShortCircuit />} />

        {/*         Battery Analysis           */}

        <Route path="/battery-analysis/:battid" element={<BatteryAnalysis />} />

        {/*               Cell Info           */}

        <Route path="cell-info" element={<Cells />} />
        <Route path="cell" element={<CellInfo />} />

        {/*           Set Parameters          */}

        <Route path='/set-parameters' element={<SetParameters />} />
        <Route path='/Battery-Characteristics/:id' element={<BattCharacteristics />} />
        <Route path='/Current-Protection/:id' element={<CurrProtection />} />
        <Route path='/Temperature-Protection/:id' element={<TempProtection />} />
        <Route path='/Voltage-Protection/:id' element={<VoltProtection />} />

        {/* <Route path="battery" element={<Battery />} /> */}
      </Routes>
    </div>
  );
}

export default App;
