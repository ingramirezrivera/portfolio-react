import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { BsArrowRightCircle, BsDownload } from "react-icons/bs";
import Button from "react-bootstrap/Button";

const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <div>
              <span className="tagline">Welcome to my Portfolio</span>
              <h1>
                {`I'm Daniel `}
                <br />
                <span className="wrap">Front-end Developer</span>
              </h1>
              <p>
                Hi! I'm a web development enthusiast. My passion is to study
                environmental technologies and apply them to the projects I work
                on. I like to work as a team to do great things and enjoy the
                process...
              </p>
              <button className="vvd" id="button-banner">
                <span>
                  <a href="#connect">
                    Let’s Connect <BsArrowRightCircle />
                  </a>
                </span>
              </button>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5} className="header-img">
            <img
              src={
                "https://firebasestorage.googleapis.com/v0/b/portfolio-react-6a0ea.appspot.com/o/assets%2Fimages%2Fperfil_daniel_ramirez_rivera.png?alt=media&token=ea66b280-97a1-4e5d-ac2b-0791118d771f"
              }
              alt="Daniel Ramírez"
            />
            <span>
              <button className="button-download"><a href="https://firebasestorage.googleapis.com/v0/b/portfolio-react-6a0ea.appspot.com/o/assets%2FPDF%2FDaniel_Ramirez_Rivera_CV.pdf?alt=media&token=8794527f-9090-4543-aa53-9bdb03367231" download="Daniel Ramirez CV" target='blank'>Download CV <BsDownload /></a> </button>
            </span>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
