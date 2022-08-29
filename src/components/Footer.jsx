import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={'https://raw.githubusercontent.com/judygab/web-dev-projects/fc630d643b3cd16d77dcad71bcac7660cdd26731/personal-portfolio/src/assets/img/logo.svg'} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={'https://raw.githubusercontent.com/judygab/web-dev-projects/fc630d643b3cd16d77dcad71bcac7660cdd26731/personal-portfolio/src/assets/img/nav-icon1.svg'} alt="Icon" /></a>
              <a href="#"><img src={'https://raw.githubusercontent.com/judygab/web-dev-projects/fc630d643b3cd16d77dcad71bcac7660cdd26731/personal-portfolio/src/assets/img/nav-icon1.svg'} alt="Icon" /></a>
              <a href="#"><img src={'https://raw.githubusercontent.com/judygab/web-dev-projects/fc630d643b3cd16d77dcad71bcac7660cdd26731/personal-portfolio/src/assets/img/nav-icon3.svg'} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}