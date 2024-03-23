 
import React from 'react';
import { Card as BootstrapCard } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
 

const CardComponent = ({ title, text, id, img }) => {

  
  return (
    <BootstrapCard style={{height:400  , marginBottom: '20px'}}>
    <BootstrapCard.Img style={{height:250}} variant="top" src={img} />
      <BootstrapCard.Body>
        {title && <BootstrapCard.Title>{title}</BootstrapCard.Title>}
        {text && <BootstrapCard.Text>{text}</BootstrapCard.Text>}
       {id&& <a href={`/${id}`}>
       <Button variant="primary">Go Details</Button>
        </a>}  
      </BootstrapCard.Body>
    </BootstrapCard>
  );
};

export default CardComponent;
