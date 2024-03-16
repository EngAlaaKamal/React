 
import React from 'react';
import { Card as BootstrapCard } from 'react-bootstrap';

const Card = ({ title, text, children }) => {
  return (
    <BootstrapCard>
      <BootstrapCard.Body>
        {title && <BootstrapCard.Title>{title}</BootstrapCard.Title>}
        {text && <BootstrapCard.Text>{text}</BootstrapCard.Text>}
        {children}
      </BootstrapCard.Body>
    </BootstrapCard>
  );
};

export default Card;
