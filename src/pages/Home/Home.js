import React, { useState } from "react";
import "./home.css";
import { useTheme } from "../../context/ThemeContext";
import Typewriter from "typewriter-effect";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import Fade from "react-reveal/Fade";
const Home = () => {
  const [theme, setTheme] = useTheme();
  //handle theme
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? <BsFillMoonStarsFill /> : <BsFillSunFill />}
        </div>
        <div className="container home-content">
          <Fade right>
            <h1>Hi, I'm a</h1>
            <h2 className="mt-4 fs-1 fst-italic text-primary">
              <Typewriter
                options={{
                  strings: ["FullStack Developer", "React Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>
          </Fade>
          <Fade bottom>
            <div className="mt-4">
              <button className="btn btn-primary px-3 py-2 me-3 rounded-pill hover">
                Hire me
              </button>
              <a
                href="www.goggle.com"
                download
                className="btn btn-primary px-3 py-2  rounded-pill"
              >
                My Resume
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Home;
