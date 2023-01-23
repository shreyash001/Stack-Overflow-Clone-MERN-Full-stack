import React from "react";
import "./LeftSidebar.css";
import { NavLink } from "react-router-dom";
// import Globe from '../../assets/Globe.png'

const LeftSidebar = () => {
  // activeClass="active" is wrong
  // why you used this ?

  return (
    <div className="left-sidebar">
      <nav className="side-nav">
        <NavLink to="/" className="side-nav-link">
          <p>Home</p>
        </NavLink>
        <div className="side-nav-div">
          <div>
            <p>Public</p>
          </div>
          <NavLink to="/Questions" className="side-nav-link">
            <p>Questions</p>
          </NavLink>
          <NavLink to="/Tags" className="side-nav-link">
            <p>Tags</p>
          </NavLink>
          <NavLink to="/Users" className="side-nav-link">
            <p>Users</p>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default LeftSidebar;
