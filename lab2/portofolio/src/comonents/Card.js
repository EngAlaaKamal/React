import React from "react";
import Card from "../reusableComponents/Card";
import { Container } from "react-bootstrap";

const CardComponent = () => {

  const cardData = [
    { title: 'Card 1', text: 'This is the first card', id:1 },
    { title: 'Card 2', text: 'This is the second card', id:2 },
    { title: 'Card 3', text: 'This is the third card', id:3 },
    { title: 'Card 4', text: 'This is the forth card', id:4 },
    { title: 'Card 5', text: 'This is the fifth card', id:5 },
    { title: 'Card 6', text: 'This is the six card' ,id:6},
  ];

  return (
    <Container>  
    <div className="my-cards-container">
      <h2>My Portofolio</h2>
      <div className="row">
      {cardData.map((card, index)=>(
        <div className="col-lg-4">
        <Card key={card.id} title={card.title} text={ card.text} isEven={index%2===0} ></Card>
       </div>
      ))}
      </div>
    </div>
    </Container>
  );
};

export default CardComponent;
