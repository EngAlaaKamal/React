import React from 'react'
import CardComponent from '../../reusableComponents/Card'
import { Container } from "react-bootstrap";
import productsdata from '../../assets/productsdata'

 const Products=() =>{
    const products=productsdata.products
    console.log(products)
  return (
    <Container>  
    <div className="my-cards-container">
      <h2>My Products</h2>
      <div className="row">
      { products.map((card, index)=>(
        <div key={card.id} className="col-lg-4">
       {console.log(card)}  
        <CardComponent   title={card.title} text={ card.category}  id={card.id} img={card.images[0]} ></CardComponent>
       </div>
      ))}
      </div>
    </div>
    </Container>
  )
}

export default  Products