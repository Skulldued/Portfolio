import React from "react";
import "./Tech.css";
import { TechStackList } from "../../utils/Techstacklist";
const Tech = () => {
  return (
    <>
      <div id="tech">
        <div className="container techstack ">
          <h2 className="col-12 mt-3 mb-1 text-center text-danger-emphasis fw-bold fst-italic text-uppercase">
            Technology stack
          </h2>
          <hr className="border-5 " />
          <p className="pb-3 text-center ">
            ✌️Including programming language , frame work , database , frontend
            , and backend tool
          </p>
        </div>

        <div className="row tech-row  ">
          {TechStackList.map((sunny) => (
            <div key={sunny.id} className="col-md-4">
              <div className="card tech-card m-2">
                <div className="card-content">
                  <div className="card-body">
                    <div className="text-center ">
                      <div className="fs-3">
                        <sunny.icons />
                      </div>
                      <div className="fw-bold ">{sunny.name}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Tech;
