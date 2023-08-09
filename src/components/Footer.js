import { Container, Row, Col } from "react-bootstrap";
import hlogo from "../assets/img/hlogo.png";
import linkedin from '../assets/img/linkedin.png';
import github from '../assets/img/github.png';
import instagram from '../assets/img/instagram.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img className="f-logo" src={hlogo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
          {/* <div className="social-icon">
                <a href="https://www.linkedin.com/in/hslambert/"><img className="social-img" src={linkedin} alt="LinkedIn" /></a>
                <a href="https://github.com/henrike32"><img className="social-img" src={github} alt="GitHub" /></a>
                <a href="https://www.instagram.com/serhenri/"><img className="social-img" src={instagram} alt="Instagram" /></a>
              </div> */}
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}