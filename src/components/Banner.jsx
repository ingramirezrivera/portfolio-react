import React, { useState, useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { BsArrowRightCircle } from 'react-icons/bs';


const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleteing] = useState(false);
    const toRotate = ["Web Developer", "Web Desinger", "UI/UX Designer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect (() => {
        let ticker = setInterval(() => {
            tick()
        },delta)

        return () => { clearInterval(ticker)}
    })

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updateText)

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if(!isDeleting && updateText === fullText) {
            setIsDeleteing(true);
            setDelta(period);
        }else if(isDeleting && updateText === ''){
            setIsDeleteing(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className='banner' id='home'>
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                    <span className='tagline'>Welcome to my Portfolio</span>
                    <h1>{`I'm a webdecoded `}<span className='wrap'>{text}</span></h1>
                    <p>Eu esse dolore mollit cillum incididunt ullamco in voluptate magna ex cupidatat cillum amet exercitation.</p>
                    <button onClick={() => console.log('connect')}>Let's Connect<BsArrowRightCircle /></button>
                    </Col>
                    <Col xs={12} md={6} xl={7}>
                        <img src={'https://raw.githubusercontent.com/judygab/web-dev-projects/fc630d643b3cd16d77dcad71bcac7660cdd26731/personal-portfolio/src/assets/img/header-img.svg'} alt='Header image' />
                    </Col>

                </Row>
            </Container>
            
        </section>
    );
}

export default Banner;
