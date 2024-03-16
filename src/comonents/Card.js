import React from "react";
import Card from "../reusableComponents/Card";
import { Container } from "react-bootstrap";

const CardComponent = () => {
  return (
    <Container>  
    <div className="my-cards-container">
      <h2>My Portofolio</h2>
      <div className="row">
        <div className="col-lg-4">
          <Card title="Card 1" text="This is the first card"></Card>
        </div>
        <div className="col-lg-4">
          <Card title="Card 2" text="This is the second card"></Card>
        </div>
        <div className="col-lg-4">
          <Card title="Card 2" text="This is the second card"></Card>
        </div>
        <div className="col-lg-4">
          <Card title="Card 2" text="This is the second card"></Card>
        </div>
        <div className="col-lg-4">
          <Card title="Card 2" text="This is the second card"></Card>
        </div>
        <div className="col-lg-4">
          <Card title="Card 2" text="This is the second card"></Card>
        </div>
      </div>
    </div>
    </Container>
  );
};

export default CardComponent;
