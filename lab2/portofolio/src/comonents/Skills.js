import React from 'react'
import { Container } from 'react-bootstrap'
import Progress from '../reusableComponents/Progress'

  const Skills=()=> {
     
    const skills = [
      { name: 'React', progress: 80,id:1 },
      { name: 'JavaScript', progress: 90,id:2 },
      { name: 'HTML', progress: 95,id:3 },
      { name: 'CSS', progress: 75,id:4 },
    ];
  return (
    <Container className="bg-dark py-5">
    <h2 className="text-white mb-4 text-center">Skills</h2>
    <div className="">
       
      {skills.map((skill, index)=>(
        <div className="progress-container mb-3"> 
        <Progress key={skill.id} now={skill.progress} label={skill.name} variant='info' />
        </div>
      ))}
         
       
    </div>
  </Container>
  )
}


export default Skills