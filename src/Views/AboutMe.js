import { Container, Row, Col } from "react-bootstrap";
import NavCard from "../Components/NavCard";
import "./AboutMe.css";
import uw2 from "../img/uw2.png";

import React from "react";
import Slider from "react-slick";

const AboutMe = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <NavCard />
      <Container>
        <h1 className="title">About Me</h1>
        <p className="sub">Bio, skills and photos.</p>
        <Row className="row-about">
          <img></img>
          <p className="p">
            Hi, I’m Michael! A dedicated, team-oriented student with extensive
            experience in full stack web applications and web services. When I am not in class, I enjoy working on side projects
            to solve complex, everday problems to apply and further my learning.
            I am a diligent, ambitious individual and I am eager to build on my
            academic foundation in computer science through real-world
            experiences.
          </p>
        </Row>



        
      </Container>
    </div>
  );
};
export default AboutMe;
