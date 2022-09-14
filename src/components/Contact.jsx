import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore"; 


export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }

  const [formDetails, setFormDetails] = useState(formInitialDetails);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submitted");
    try {
      const docRef = await addDoc(collection(db, "contacts"), {
        firstName: formDetails.firstName,
        lastName: formDetails.lastName,
        email: formDetails.email,
        phone: formDetails.phone,
        message: formDetails.message,
      });
      console.log("Document written with ID: ", docRef.id);
      alert('Thanks! The Message has been submitted.');
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6} className="d-flex justify-content-center">
            <img src={'https://firebasestorage.googleapis.com/v0/b/portfolio-react-6a0ea.appspot.com/o/assets%2Fcontact_img.png?alt=media&token=70b64995-6553-47ad-89ef-1ec0de7dabe1'} />
          </Col>
          <Col size={12} md={6}>
            
                <h2>Get In Touch</h2>
                <form onSubmit={handleSubmit}>
                  <Row className="contact-form">
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} md={12} className="px-1">
                      <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      <button type="submit"><span>Submit</span></button>
                    </Col>
                    
                  </Row>
                </form> 
          </Col>
        </Row>
      </Container>
    </section>
  )
}