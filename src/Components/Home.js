import React from "react";
import "./Home.css";
import memoji from "../img/memoji.png";
import NavCard from "./NavCard";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { AiFillFileMarkdown } from "react-icons/ai";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";


const MainCard = () => {
  return (
    <div>
      <NavCard />
      <div className="outline">
        <div className="text-card">
          <h1 className="name-text">Michael Sheng</h1>
          <p className="body-text">
            I'm a software developer studying Management Engineering{" "}
            <font color="#9900FF">@UWaterloo</font>.🎒
          </p>
          <p className="body-text">
            This winter, I interned <font color="#3355FF">@Scrawlr</font> as
            a Backend Developer.
          </p>

          <Link to="/experience" style={{ textDecoration: "none" }}>
            <button className="learn-more-button">
              Learn More
            </button>
          </Link>


          <div className="button-container">
            <IconContext.Provider
              value={{ color: "grey", className: "button-scale" }}
            >
              <button className="button-icon">
                <a
                  target="_blank"
                  href="https://github.com/michaelsheng15"
                  rel="noreferrer"
                >
                  <AiFillGithub className="logo" />
                </a>
              </button>
            </IconContext.Provider>

            <IconContext.Provider
              value={{ color: "grey", className: "button-scale" }}
            >
              <button className="button-icon">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/michaeljsheng/"
                  rel="noreferrer"
                >
                  <AiFillLinkedin className="logo" />
                </a>
              </button>
            </IconContext.Provider>

            <IconContext.Provider
              value={{ color: "grey", className: "button-scale" }}
            >
              <button className="button-icon">
                <a
                  target="_blank"
                  href="mailto:m3sheng@uwaterloo.ca"
                  rel="noreferrer"
                >
                  <AiFillMail className="logo" />
                </a>
              </button>
            </IconContext.Provider>

            <IconContext.Provider
              value={{
                color: "grey",
                className: "button-scale",
                border: "none",
              }}
            >
              <button className="button-icon">
                <a target="_blank" href="null" rel="noreferrer">
                  <AiFillFileMarkdown className="logo" />
                </a>
              </button>
            </IconContext.Provider>
          </div>

        </div>
      </div>
    </div>
  );
};
export default MainCard;
