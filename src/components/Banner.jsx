import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { BsArrowRightCircle } from "react-icons/bs";

const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
              <div>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>
                  {`I'm a Daniel `}
                  <br />
                  <span className="wrap">Front-end Developer</span>
                </h1>
                <p>
                  Hi! I'm a web development enthusiast. My passion is to study environmental technologies and apply them to the projects I work on. I like to work as a team to do great things and enjoy the process.
                </p>
                <button onClick={() => console.log("connect")}>
                  Let's Connect
                  <BsArrowRightCircle />
                </button>
              </div>
          </Col>
          <Col xs={12} md={6} xl={5} className='header-img'>
            <img
              src={
                "https://drive.google.com/uc?id=13j-xL-x77XG7X-HJrsGL_j-gVzZ0zp7o"
              }
              alt="Daniel Ramírez image"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
