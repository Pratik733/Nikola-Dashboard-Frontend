import "./sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import DisplaySettingsOutlinedIcon from '@mui/icons-material/DisplaySettingsOutlined';
import { Link, useNavigate } from "react-router-dom";
// import { DarkModeContext } from "../../context/darkModeContext";
import { useContext, useState } from "react";
import logo from '../assets/nikolaLogo.png'



const Sidebar = () => {
  const navigate = useNavigate();
  const [mini, setMini] = useState(true);

  const toggleSidebar = () => {
    if (mini) {
      console.log('opening sidebar');
      document.getElementsByClassName('sidebar')[0].style.width = '20rem';
      document.getElementsByClassName('sidebar')[0].style.padding = '0';
      setMini(false);
    } else {
      console.log('closing sidebar');
      document.getElementsByClassName('sidebar')[0].style.width = '3.7rem';
      document.getElementsByClassName('sidebar')[0].style.paddingLeft = '2px';
      setMini(true);
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
    window.location.reload();
  }

  //   const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar transition-all truncate" onMouseEnter={toggleSidebar} onMouseLeave={toggleSidebar}>
      <div className="top">
        <Link to="/" className="w-full" style={{ textDecoration: "none" }}>
          <div className="w-full flex flex-row justify- items-center border-2 border-black">
            <img src={logo} alt="logo" className="h-12" />
            <span className="text-[#2691D9] font-extrabold text-[20px] ml-1">NIKOLACHARGING</span>
          </div>
        </Link>
      </div>
      <hr className="line" />
      <div className={`center-d ${mini ? 'pl-1' : ''} transition-all`}>
        <ul className={`${mini ? 'text-center' : ""} truncate`}>
          <p className="title">MAIN</p>
          <Link to="/">
            <li>
              <DashboardIcon className="icon" style={{ width: 'auto', height: '2rem' }} />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li >
              <PersonOutlineIcon className="icon" style={{ width: 'auto', height: '2rem' }} />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" style={{ width: 'auto', height: '2rem' }} />
              <span>Vehicles</span>
            </li>
          </Link>
          {/* <li>
            <CreditCardIcon className="icon" style={{ width:'auto',height: '2rem'}} />
            <span>Orders</span>
          </li> */}
          {/* <li>
            <LocalShippingIcon className="icon" style={{ width:'auto',height: '2rem'}} />
            <span>Delivery</span>
          </li> */}
          <p className="title">USEFUL</p>
          <li>
            <InsertChartIcon className="icon" style={{ width: 'auto', height: '2rem' }} />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" style={{ width: 'auto', height: '2rem' }} />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <Link to='/set-parameters'>
            <li>
              <DisplaySettingsOutlinedIcon className="icon" style={{ width: 'auto', height: '2rem' }} />
              <span>Set Parameters</span>
            </li>
          </Link>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" style={{ width: 'auto', height: '2rem' }} />
            <span>Battery Details</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" style={{ width: 'auto', height: '2rem' }} />
            <span>Cell Details</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" style={{ width: 'auto', height: '2rem' }} />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" style={{ width: 'auto', height: '2rem' }} />
            <span>Profile</span>
          </li>
          <li onClick={handleLogout}>
            <ExitToAppIcon className="icon" style={{ width: 'auto', height: '2rem' }} />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      {/* <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div> */}
    </div>
  );
};

export default Sidebar;
