import { Container, Row, Col } from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner';
import 'animate.css';
import { useState, useRef } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore"; 
import emailjs from '@emailjs/browser';


export const Contact = () => {
  const form = useRef();

  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});
  const [loading, setLoading] = useState(false);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    console.log("submitted");
    try {
      const docRef = await addDoc(collection(db, "contacts"), {
        firstName: formDetails.firstName,
        lastName: formDetails.lastName,
        email: formDetails.email,
        phone: formDetails.phone,
        message: formDetails.message,
      });
      setButtonText("Send");
      console.log("Document written with ID: ", docRef.id);
      sendEmail(e);
      setFormDetails(formInitialDetails);
      setStatus({ succes: true, message: 'Message sent successfully'});
    } catch (e) {
      console.error("Error adding document: ", e);
      setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    }
  }

  const sendEmail = () => {
    emailjs.sendForm('service_gb5jleh', 'template_u7v890f', form.current, 'jhXK3ckua3dHqO5Zx')
      .then((result) => {
          console.log(result.text);
          console.log(formDetails);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6} className="d-flex justify-content-center">
            <img src={'https://firebasestorage.googleapis.com/v0/b/portfolio-react-6a0ea.appspot.com/o/assets%2Fcontact_img.png?alt=media&token=70b64995-6553-47ad-89ef-1ec0de7dabe1'} alt='Contact Logo' />
          </Col>
          <Col size={12} md={6}>
            
                <h2>Get In Touch</h2>
                <form ref={form} onSubmit={handleSubmit}>
                  <Row className="contact-form">
                    <Col size={12} sm={6} className="px-1">
                      <input name='first_name'type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input name="last_name" type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input name="email" type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input name="phone" type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} md={12} className="px-1">
                      <textarea name="message" rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      <button type="submit"><span>{buttonText}{buttonText === "Sending..." ? <Spinner animation="grow" variant="light" size="sm" /> : "" }</span></button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                    
                  </Row>
                </form> 
          </Col>
        </Row>
      </Container>
    </section>
  )
}