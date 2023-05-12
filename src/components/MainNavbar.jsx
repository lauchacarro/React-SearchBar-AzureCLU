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
  FaUserAlt,
  FaLock,
  FaMoneyBill
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
          {/* <NavLink className="logo" to="/">
            <img src="https://cdn-icons-png.flaticon.com/512/3893/3893081.png" alt="logo" />
          </NavLink> */}
          <div className="links nav-top">
            <NavLink to="/" className="nav-link">
              <FaThLarge size={ICON_SIZE} />
              <span>Home</span>
            </NavLink>
            <NavLink to="/account" className="nav-link">
              <FaUserAlt size={ICON_SIZE} />
              <span>Mi Cuenta</span>
            </NavLink>
            <NavLink to="/services" className="nav-link">
              <FaMoneyBill size={ICON_SIZE} />
              <span>Pagar Servicios</span>
            </NavLink>
            <NavLink to="/accessibility" className="nav-link">
              <FaChartBar size={ICON_SIZE} />
              <span>Accesibilidad </span>
            </NavLink>
            <NavLink to="/security" className="nav-link">
              <FaLock size={ICON_SIZE} />
              <span>Seguridad</span>
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
