import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';


const logo = "https://drive.google.com/uc?id=1EHgONUQ2x-F4aGfUQXQT6nBSTh8z0Evu";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/daniel-ramírez-rivera-1707613b" target="_blank"><FaLinkedinIn className="icon" /></a>
                <a href="https://github.com/ingramirezrivera" target="_blank"><FaGithub className="icon"/></a>
            </div>
            
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}