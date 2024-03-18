// Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaTelegram, FaTwitter, FaFacebook } from 'react-icons/fa';
import ButtonComponent from '../reusableComponents/Button';
 

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row className="align-items-center">
          <Col>
            <div className="text-white d-flex align-items-center justify-content-between">
              <ButtonComponent  className="text-white" onClick={() => console.log('Button clicked')} variant="outline-light">Click me</ButtonComponent>
              <div className="footer-icons ml-3">
                <FaTelegram className="text-white" /> 
                 <FaTwitter className="text-white ml-2" /> 
                 <FaFacebook className="text-white ml-2"/> 
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
