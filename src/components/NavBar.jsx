import React, { useState, useEffect } from "react";
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const logo = "https://drive.google.com/uc?id=1EHgONUQ2x-F4aGfUQXQT6nBSTh8z0Evu";

export default function NavBar() {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);

    }, [])
    
    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    }

    return (
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container className="navbar-container">
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" className="personal-logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/daniel-ramírez-rivera-1707613b" target="_blank"><FaLinkedinIn className="icon" /></a>
                <a href="https://github.com/ingramirezrivera" target="_blank"><FaGithub className="icon"/></a>
              </div>
              <button className="vvd"><span>Let’s Connect</span></button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}
