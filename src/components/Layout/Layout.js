import React, { useState } from "react";
import Home from "../../pages/Home/Home";
import { LiaArrowAltCircleRight, LiaArrowAltCircleLeft } from "react-icons/lia";
import "./Layout.css";
import Menu from "../Menus/Menu";

const Layout = () => {
  const [toggle, setToggle] = useState(true);

  // change toggle button
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className="sidebar-section">
        <div className={toggle ? "sidebar-toggle" : "sidebar"}>
          <div className="sidebar-toggle-icons">
            <p onClick={handleToggle}>
              {toggle ? (
                <LiaArrowAltCircleLeft size={40} />
              ) : (
                <LiaArrowAltCircleRight size={40} />
              )}
            </p>
          </div>
          <Menu toggle={toggle} />
        </div>
        <div className="container">
          <Home />
        </div>
      </div>
    </>
  );
};

export default Layout;
