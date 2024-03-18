import React from 'react';
 
import ButtonComponent from '../reusableComponents/Button';


const HeroComponent=()=>{
    return (
        
    <div class="p-5 text-white bg-cover" style={{backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3AXyiVPL5ZFFL1ukHM8293d5QdBm5TtHyPA&usqp=CAU)`, backgroundSize: 'cover',height:'300px', marginBottom:'40PX'}}>
        <div class="container">
          <h1 class="display-4">Alaa Kamal</h1>
          <p class="lead">I am software engineer</p>
          <ButtonComponent  className="text-white" onClick={() => console.log('Button clicked')} variant="outline-light">Click me</ButtonComponent>
        </div> 

      </div>
      
      
    );
};

export default HeroComponent