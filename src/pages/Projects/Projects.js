import React from "react";
import "./Projects.css";
import Spin from "react-reveal/Spin";
import Fade from "react-reveal/Fade";
const Projects = () => {
  return (
    <>
      <Fade left>
        <div id="project">
          <Spin>
            <div className="container project">
              <h2 className="col-12 mx-auto mt-3 mb-1  text-danger-emphasis fw-bold fst-italic text-uppercase">
                Top Recent Projects
              </h2>
            </div>
          </Spin>
          <div className="hr-line">
            {" "}
            <hr className="" />
          </div>
          <div className="project-content">
            <p className="mb-5">
              We use an RGB version of our --bs-success (with the value of 25,
              135, 84) CSS variable and attached a second CSS variable,
              --bs-border-opacity, for the alpha transparency (with a default
              value 1 thanks to a local CSS variable). That means anytime you
              use .border-success now, your computed color value is rgba(25,
              135, 84, 1). The local CSS variable inside each .border-* class
              avoids inheritance issues so nested instances of the utilities
              don’t automatically have a modified alpha transparency.
            </p>
          </div>

          <div className=" row  ">
            <div className="container-card col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="heading p-2">Full Stack</span>
                  <img
                    src="https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="card-img"
                    width={400}
                    height={300}
                    className="project-img"
                  />
                </div>
                <div className="card-body">
                  <span className="tech-1">Node</span>
                  <span className="tech-1">Express</span>
                  <span className="tech-1">Reactjs</span>
                  <span className="tech-1">Mongodb</span>
                </div>
                <div className="Techno-used mt-2 mb-2 ">
                  {" "}
                  <span className="bg-secondary text-white p-2 tech-p">
                    Technology use
                  </span>
                  <br />
                  <button className="mt-3 mb-2 btn btn-primary">View</button>
                </div>
              </div>
            </div>

            <div className="container-card col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="heading p-2">Full Stack</span>
                  <img
                    src="https://www.codingnepalweb.com/wp-content/uploads/2021/08/Build-Weather-App-in-JavaScript.jpg"
                    alt="card-img"
                    width={400}
                    height={300}
                    className="project-img"
                  />
                </div>
                <div className="card-body">
                  <span className="tech-1">Html</span>
                  <span className="tech-1">Javascript</span>
                  <span className="tech-1">Css</span>
                </div>
                <div className="Techno-used mt-2 mb-2 ">
                  {" "}
                  <span className="bg-secondary text-white p-2 tech-p">
                    Technology use
                  </span>
                  <br />
                  <button className="mt-3 mb-2 btn btn-primary">View</button>
                </div>
              </div>
            </div>

            <div className="container-card col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="heading p-2">Boat UI</span>
                  <img
                    src="https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="card-img"
                    width={400}
                    height={300}
                    className="project-img"
                  />
                </div>
                <div className="card-body">
                  <span className="tech-1">Html</span>
                  <span className="tech-1">Css</span>
                </div>
                <div className="Techno-used mt-2 mb-2 ">
                  {" "}
                  <span className="bg-secondary text-white p-2 tech-p">
                    Technology use
                  </span>
                  <br />
                  <button className="mt-3 mb-2 btn btn-primary">View</button>
                </div>
              </div>
            </div>
            <div className="container-card col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="heading p-2">Full Stack</span>
                  <img
                    src="https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="card-img"
                    width={400}
                    height={300}
                    className="project-img"
                  />
                </div>
                <div className="card-body">
                  <span className="tech-1">Html</span>
                  <span className="tech-1">Javascript</span>
                  <span className="tech-1">Css</span>
                </div>
                <div className="Techno-used mt-2 mb-2 ">
                  {" "}
                  <span className="bg-secondary text-white p-2 tech-p">
                    Technology use
                  </span>
                  <br />
                  <button className="mt-3 mb-2 btn btn-primary">View</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default Projects;
