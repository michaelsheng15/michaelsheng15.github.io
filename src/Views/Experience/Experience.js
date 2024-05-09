import { Container, Row, Col } from "react-bootstrap";
import NavCard from "../../Components/NavCard";
import "../Views.css";
import yrlogo1 from "../../img/yrlogo1.png";
import harness from "../../img/harness.png";
import de from "../../img/delogo.png";
import ld from "../../img/ld.png";
import open from "../../img/open.webp";
import scrawlr from "../../img/scrawlr.jpeg";



const ExperienceCard = () => {
  return (
    <Container>
      <NavCard />
      <h1 className="title">Experience</h1>
      <p className="sub-exp-text">Internships, clubs and freelancing</p>

      <div className="item-container-wrapper">
        <Row className="item-container">
          <Col lg={7} className="text-col">
            <div className="text-wrapper">
              <h3>Scrawlr</h3>
              <p>Backend Software Engineer</p>
            </div>
          </Col>
          <Col lg={5} className="img-col">
            <img src={scrawlr} className='scrawlr' />
          </Col>
        </Row>
      </div>
      <div className="item-container-wrapper">
        <Row className="item-container">
          <Col lg={7} className="text-col">
            <div className="text-wrapper">
              <h3>OPENLANE</h3>
              <p>Software Engineer</p>
            </div>
          </Col>
          <Col lg={5} className="img-col">
            <img src={open} className='open' />
          </Col>
        </Row>
      </div>
      <div className="item-container-wrapper">
        <Row className="item-container">
          <Col lg={7} className="text-col">
            <div className="text-wrapper">
              <h3>Loblaw Digital</h3>
              <p>Software Engineer</p>
            </div>
          </Col>
          <Col lg={5} className="img-col">
            <img src={ld} className='ld' />
          </Col>
        </Row>
      </div>
      <div className="item-container-wrapper">
        <Row className="item-container">
          <Col lg={7} className="text-col">
            <div className="text-wrapper">
              <h3>Digital Extremes</h3>
              <p>Full Stack Web Developer</p>
            </div>
          </Col>
          <Col lg={5} className="img-col">
            <img src={de} className='de' />
          </Col>
        </Row>
      </div>
      <div className="item-container-wrapper">
        <Row className="item-container">
          <Col lg={7} className="text-col">
            <div className="text-wrapper">
              <h3>York Region</h3>
              <p>Technical Support Analyst</p>
            </div>
          </Col>
          <Col lg={5} className="img-col">
            <img src={yrlogo1} className='yr' />
          </Col>
        </Row>
      </div>
      <div className="item-container-wrapper">
        <Row className="item-container">
          <Col lg={8} className="text-col">
            <div className="text-wrapper">
              <h3>Harness Education</h3>
              <p>Cirriculum Coordinator</p>
            </div>
          </Col>
          <Col lg={4} className="img-col">
            <img src={harness} />
          </Col>
        </Row>
      </div>
    </Container>
  );
};
export default ExperienceCard;
