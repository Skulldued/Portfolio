import React from "react";
import "./Menu.css";
import {
  FcHome,
  FcContacts,
  FcAbout,
  FcRules,
  FcBiotech,
  FcBusinessman,
  FcDatabase,
} from "react-icons/fc";
import Zoom from "react-reveal/Zoom";
import Bounce from "react-reveal/Bounce";
import Jump from "react-reveal/Jump";
import { Link } from "react-scroll";

const Menu = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <Jump>
            <div className="nav-bar-profile">
              {/* <img src="../../../assert/profile.jpg" alt="profile-pic" /> */}
              <img
                src="https://marketplace.canva.com/EAFSZhFumYM/1/0/1600w/canva-dark-red-neon-futuristic-instagram-profile-picture-MUPA4np8in0.jpg"
                alt=""
              />
            </div>
          </Jump>
          <Zoom>
            <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link">
                  <Link to="home">
                    <FcHome />
                    Home
                  </Link>
                </div>
                <div className="nav-link">
                  <Link to="contact">
                    <FcContacts />
                    Contact
                  </Link>
                </div>
                <div className="nav-link">
                  <Link to="work">
                    <FcRules />
                    Work experience
                  </Link>
                </div>
                <div className="nav-link">
                  <Link to="tech">
                    <FcBiotech />
                    Tech Stack
                  </Link>
                </div>
                <div className="nav-link">
                  <Link to="education">
                    <FcBusinessman />
                    Education Detail
                  </Link>
                </div>
                <div className="nav-link">
                  <FcAbout />
                  About
                </div>
                <div className="nav-link projects">
                  <Link to="project">
                    <FcDatabase />
                    Projects
                  </Link>
                </div>
              </div>
            </div>
          </Zoom>
        </>
      ) : (
        <>
          <Bounce>
            <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link" title="Home">
                  <Link to="home">
                    <FcHome />
                  </Link>
                </div>
                <div className="nav-link" title="contact">
                  <Link to="contact">
                    <FcContacts />
                  </Link>
                </div>
                <div className="nav-link" title="Work experience">
                  <Link to="work">
                    <FcRules />
                  </Link>
                </div>
                <div className="nav-link" title="Tech Stack">
                  <Link to="tech">
                    {" "}
                    <FcBiotech />
                  </Link>
                </div>
                <div className="nav-link" title="Education Detail">
                  <Link to="education">
                    <FcBusinessman />
                  </Link>
                </div>
                <div className="nav-link" title="about">
                  <Link to="about">
                    <FcAbout />
                  </Link>
                </div>
                <div className="nav-link" title=" Projects">
                  <Link to="project">
                    <FcDatabase />
                  </Link>
                </div>
              </div>
            </div>
          </Bounce>
        </>
      )}
    </>
  );
};

export default Menu;
