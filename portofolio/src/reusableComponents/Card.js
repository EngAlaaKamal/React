 
import React from 'react';
import { Card as BootstrapCard } from 'react-bootstrap';

const Card = ({ title, text, children,isEven }) => {

  const cardStyle = {
    backgroundColor: isEven ? '#f0f0f0' : '#333',
    color: isEven ? '#333' : '#fff'
  };
  return (
    <BootstrapCard style={cardStyle}>
      <BootstrapCard.Body>
        {title && <BootstrapCard.Title>{title}</BootstrapCard.Title>}
        {text && <BootstrapCard.Text>{text}</BootstrapCard.Text>}
        {children}
      </BootstrapCard.Body>
    </BootstrapCard>
  );
};

export default Card;
