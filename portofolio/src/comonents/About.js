import React from 'react';
import { Container } from 'react-bootstrap'
import ButtonComponent from '../reusableComponents/Button';

  const About=()=> {
  return (
    <Container >  
    <div className="mb-20"> 
    <div id="about" className="row">
    <div className="col-md-6">
      <h2>About Me</h2>
    </div>
    <div className="col-md-6">
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
      </p>
      <ButtonComponent  className="text-white" onClick={() => console.log('Button clicked')} variant="dark">Click me</ButtonComponent>
    </div>
  </div>
  </div>
  </Container>
  
  );
};

export default About;