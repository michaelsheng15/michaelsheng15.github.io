import { Container, Row, Col } from "react-bootstrap";
import NavCard from "../../Components/NavCard";
import "../Views.css";
import DiceBlitz from "../../img/DiceBlitz.png";
import Site from "../../img/Site.png";
import Sort from "../../img/Sort.png";
import ind from "../../img/ind.png";
import Cooky from "../../img/cooky.png";


const Projects = () => {
  return (
    <Container>
      <NavCard />
      <h1 className="title">Projects</h1>
      <p className="sub-exp-text">Side projects and hackathons</p>
      <div className="item-container-wrapper">
        <a
          href="https://github.com/michaelsheng15/react-website"
          target="_blank"
          className="a"
          rel="noreferrer"
        >
          <Row className="item-container">
            <Col lg={7} className="text-col">
              <div className="text-wrapper">
                <h3>DiceBlitz</h3>
                <p>HTML | CSS | JavaScript</p>
              </div>
            </Col>
            <Col lg={5} className="img-col">
              <div className="diceblitz-div">
                <img src={DiceBlitz} className="site" alt="DiceBlitz" />
              </div>
            </Col>
          </Row>
        </a>
      </div>
      <div className="item-container-wrapper">
        <a
          href="https://github.com/michaelsheng15/react-website"
          target="_blank"
          className="a"
          rel="noreferrer"
        >
          <Row className="item-container">
            <Col lg={7} className="text-col">
              <div className="text-wrapper">
                <h3>COOKY</h3>
                <p>Voiceflow | Figma | Spoontacular API</p>
              </div>
            </Col>
            <Col lg={5} className="img-col">
              <img src={Cooky} className="site" alt="COOKY" />
            </Col>
          </Row>
        </a>
      </div>
      <div className="item-container-wrapper">
        <a
          href="https://github.com/michaelsheng15/react-website"
          target="_blank"
          className="a"
          rel="noreferrer"
        >
          <Row className="item-container">
            <Col lg={7} className="text-col">
              <div className="text-wrapper">
                <h3>Personal Website</h3>
                <p>React.js | Bootstrap</p>
              </div>
            </Col>
            <Col lg={5} className="img-col">
              <img src={Site} className="site" alt="Personal Site" />
            </Col>
          </Row>
        </a>
      </div>
      <div className="item-container-wrapper">
        <a
          href="https://github.com/michaelsheng15/SortUX"
          target="_blank"
          className="a"
          rel="noreferrer"
        >
          <Row className="item-container">
            <Col lg={7} className="text-col">
              <div className="text-wrapper">
                <h3>SortUX</h3>
                <p>VBA | MS Excel Tools</p>
              </div>
            </Col>
            <Col lg={5} className="img-col">
              <img src={Sort} className='sort' />
            </Col>
          </Row>
        </a>
      </div>
      <div className="item-container-wrapper">
        <a
          href="https://github.com/michaelsheng15/AdminPack"
          target="_blank"
          className="a"
          rel="noreferrer"
        >
          <Row className="item-container">
            <Col lg={7} className="text-col">
              <div className="text-wrapper">
                <h3>AdminPack</h3>
                <p>VBA | MS Excel Tools</p>
              </div>
            </Col>
            <Col lg={5} className="img-col">
              <img src={ind} className='sort' />
            </Col>
          </Row>
        </a>
      </div>
    </Container>
  );
};
export default Projects;
