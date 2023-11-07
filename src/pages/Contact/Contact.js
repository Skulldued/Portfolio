import React from "react";
import "./Contact.css";
import { BsInstagram, BsLinkedin, BsGithub, BsFacebook } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import Rotate from "react-reveal/Rotate";

const Contact = () => {
  return (
    <>
      <Rotate top left>
        <div className="contact " id="contact">
          <div className="row">
            <div className="col-md-6">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCk9MTsj5pE-i-GeCcNBfs-ae6xP4-xkyidA&usqp=CAU"
                alt="contact-img"
                height={300}
              />
            </div>
            <div className="col-md-6">
              <div className="fw-bold">Contact With</div>
              <div className="icons">
                <a href="https://www.instagram.com/">
                  <span className="contact-icons ms-2 fs-4">
                    <BsInstagram />
                  </span>
                </a>
                <a href="https://www.linkedin.com/in/sunny-raj-397059210/">
                  <span className="contact-icons ms-2 fs-4">
                    <BsLinkedin />
                  </span>
                </a>
                <a href="https://github.com/settings/profile">
                  <span className="contact-icons ms-2 fs-4">
                    <BsGithub />
                  </span>
                </a>
                <a href="mailto:sunnyrajkcb@gmail.com">
                  <span className="contact-icons ms-2 fs-4">
                    <BiLogoGmail />
                  </span>
                </a>
                <a href="https://www.facebook.com/">
                  <span className="contact-icons ms-2 fs-4">
                    <BsFacebook />
                  </span>
                </a>
              </div>
              <p className="mt-2 mb-2">OR</p>

              <form className="form">
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="input-text mt-2 p-2"
                />

                <br />
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="input-text mt-2 p-2"
                />
                <br />
                <textarea
                  placeholder="Write Your Message"
                  className="input-text mt-2 p-2"
                />
                <br />

                <button className="btn btn-primary mt-2 p-2 mb-3 input-text">
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </Rotate>
    </>
  );
};

export default Contact;
