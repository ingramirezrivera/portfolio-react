import { isVisible } from "@testing-library/user-event/dist/utils";
import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { BsArrowRightCircle } from "react-icons/bs";
import TrackVisibility from "react-on-screen";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleteing] = useState(false);
  const toRotate = ["Front-end Developer", "Fullstack Developer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  });

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updateText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updateText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updateText === fullText) {
      setIsDeleteing(true);
      setDelta(period);
    } else if (isDeleting && updateText === "") {
      setIsDeleteing(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
            {({ isVisible }) => 
                <div className={isVisible ? "animated__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>
                    {`I'm a Daniel `}
                    <br />
                    <span className="wrap">{text}</span>
                </h1>
                <p>
                    Eu esse dolore mollit cillum incididunt ullamco in voluptate
                    magna ex cupidatat cillum amet exercitation.
                </p>
                <button onClick={() => console.log("connect")}>
                    Let's Connect
                    <BsArrowRightCircle />
                </button>
                </div>
            }
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img
              src={
                "https://drive.google.com/uc?id=13j-xL-x77XG7X-HJrsGL_j-gVzZ0zp7o"
              }
              alt="Header image"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
