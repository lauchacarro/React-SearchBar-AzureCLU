import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaAngleRight,
  FaAngleLeft,
  FaChartBar,
  FaThLarge,
  FaShoppingCart,
  FaCog,
  FaSignOutAlt,
  FaBars,
} from "react-icons/fa";

const MainNavbar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const ICON_SIZE = 20;

  return (
    <>
      <div className="mobile-nav">
        <button
          className="mobile-nav-btn"
          onClick={() => setSidebarVisible(!sidebarVisible)}
        >
          <FaBars size={24} />
        </button>
      </div>

      <nav className={!sidebarVisible ? "navbar" : ""}>
        <button
          type="button"
          className="nav-btn"
          onClick={() => setSidebarVisible(!sidebarVisible)}
        >
          {!sidebarVisible ? (
            <FaAngleRight size={30} />
          ) : (
            <FaAngleLeft size={30} />
          )}
        </button>
        <div>
          <NavLink className="logo" to="/">
            <img src="" alt="logo" />
          </NavLink>
          <div className="links nav-top">
            <NavLink to="/" className="nav-link">
              <FaThLarge size={ICON_SIZE} />
              <span>Dashboard</span>
            </NavLink>
            <NavLink to="/dashboard" className="nav-link">
              <FaThLarge size={ICON_SIZE} />
              <span>Dashboard</span>
            </NavLink>
            <NavLink to="/dashboard" className="nav-link">
              <FaChartBar size={ICON_SIZE} />
              <span>Analytics </span>
            </NavLink>
            <NavLink to="/dashboard" className="nav-link">
              <FaShoppingCart size={ICON_SIZE} />
              <span>Orders</span>
            </NavLink>
          </div>
        </div>

        <div className="links">
          <NavLink to="/dashboard" className="nav-link">
            <FaCog size={ICON_SIZE} />
            <span>Settings</span>
          </NavLink>
          <NavLink to="/dashboard" className="nav-link">
            <FaSignOutAlt size={ICON_SIZE} />
            <span>Logout</span>
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default MainNavbar;
