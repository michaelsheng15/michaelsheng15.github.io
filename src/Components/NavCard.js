import React from "react";
import "./NavCard.css";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const NavCard = () => {
  return (
    <Container className="screen">
      <Row className="row">
        <Col className="nav-col">
          <Link to="/" style={{ textDecoration: "none" }}>
            <p className="nav-label">Home 🏡</p>
          </Link>
        </Col>
        {/* <Col className="nav-col">
          <Link to="/about" style={{ textDecoration: "none" }}>
            <p className="nav-label">About Me 👨‍💻</p>
          </Link>
        </Col> */}
        <Col className="nav-col">
          <Link to="/experience" style={{ textDecoration: "none" }}>
            <p className="nav-label">Experience 🚀</p>
          </Link>
        </Col>
        {/* <Col className="nav-col">
          <Link to="/projects" style={{ textDecoration: "none" }}>
            <p className="nav-label">Projects 🔧</p>
          </Link>
        </Col> */}
      </Row>
    </Container>
  );
};

export default NavCard;
