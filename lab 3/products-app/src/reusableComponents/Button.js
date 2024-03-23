
import React from 'react';
import Button from 'react-bootstrap/Button';

const ButtonComponent = ({ onClick, children, variant }) => {
  return (
    <Button onClick={onClick} variant={variant} >
      {children}
    </Button>
  );
};

export default ButtonComponent;
