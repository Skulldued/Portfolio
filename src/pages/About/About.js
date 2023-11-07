import React from "react";
import "./About.css";
import Zoom from "react-reveal/Zoom";
const About = () => {
  return (
    <>
      <div className="about  ">
        <div className=" row ">
          <Zoom>
            <div className="col-md-4 profile-img">
              <img
                src="https://marketplace.canva.com/EAFSZhFumYM/1/0/1600w/canva-dark-red-neon-futuristic-instagram-profile-picture-MUPA4np8in0.jpg"
                alt=""
                height={300}
                width={300}
                className="profile rounded"
              />
            </div>
          </Zoom>
          <div className=" col-md-5 fs-5 text-box ">
            <h1 className="fw-bold text-info ">
              <em>About Me</em>
            </h1>
            <hr className="text-decoration-underline" />
            <p className="p-text ">
              At Techvify, We have hundreds of young and creative programmers.
              Sometimes, We like to share with each other quotes about
              programming for developers. A quote from someone at the right time
              gives us a powerful inspiration. These quotes are carefully
              selected by Techvify so that they can be printed and hung in the
              office or private room. Hope the following motivational and
              inspirational quotes will inspire you.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
