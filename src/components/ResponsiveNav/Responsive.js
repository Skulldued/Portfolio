import React, { useState } from "react";
import "./Responsive.css";
import { BiMenu } from "react-icons/bi";
import { GiCancel } from "react-icons/gi";
import Zoom from "react-reveal/Zoom";
import { Link } from "react-scroll";
import {
  FcHome,
  FcContacts,
  FcAbout,
  FcRules,
  FcBiotech,
  FcBusinessman,
  FcDatabase,
} from "react-icons/fc";
const Responsive = () => {
  const [click, setClick] = useState(false);

  //handleClick
  const handleClick = () => {
    setClick(!false);
  };

  //handle click menu

  const handleMenu = () => {
    setClick(false);
  };
  return (
    <>
      <div className="mobile-nav">
        <div className="mobile nav-header">
          {click ? (
            <GiCancel
              size={30}
              className="text-white menu"
              onClick={handleClick}
            />
          ) : (
            <BiMenu
              size={30}
              className="text-white menu"
              onClick={handleClick}
            />
          )}
          <span className="text-uppercase ms-2 fw-bold ">My portfolio</span>
        </div>

        {click && (
          <div className="mobile-nav-menu">
            <Zoom>
              <div className="nav-items">
                <div className="nav-item">
                  <div className="nav-link">
                    <Link to="home" onClick={handleMenu}>
                      <FcHome />
                      Home
                    </Link>
                  </div>
                  <div className="nav-link">
                    <Link to="contact" onClick={handleMenu}>
                      <FcContacts />
                      Contact
                    </Link>
                  </div>
                  <div className="nav-link">
                    <Link to="work" onClick={handleMenu}>
                      <FcRules />
                      Work experience
                    </Link>
                  </div>
                  <div className="nav-link">
                    <Link to="tech" onClick={handleMenu}>
                      <FcBiotech />
                      Tech Stack
                    </Link>
                  </div>
                  <div className="nav-link">
                    <Link to="education" onClick={handleMenu}>
                      <FcBusinessman />
                      Education Detail
                    </Link>
                  </div>
                  <div className="nav-link">
                    <Link onClick={handleMenu}>
                      <FcAbout />
                      About
                    </Link>
                  </div>
                  <div className="nav-link projects">
                    <Link to="project" onClick={handleMenu}>
                      <FcDatabase />
                      Projects
                    </Link>
                  </div>
                </div>
              </div>
            </Zoom>
          </div>
        )}
      </div>
    </>
  );
};

export default Responsive;
