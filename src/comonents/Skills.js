import React from 'react'
import { Container } from 'react-bootstrap'
import Progress from '../reusableComponents/Progress'

  const Skills=()=> {
  return (
    <Container className="bg-dark py-5">
    <h2 className="text-white mb-4 text-center">Skills</h2>
    <div className="">
      <div className="progress-container mb-3">
        <Progress now={80} label='React' variant='info' />
      </div>
      <div className="progress-container mb-3">
        <Progress now={90} label='JS' variant='info'/>
      </div>
      <div className="progress-container mb-3">
        <Progress now={95} label='HTML' variant='info'/>
      </div>
      <div className="progress-container mb-3">
        <Progress now={75} label='CSS' variant='info'/>
      </div>
    </div>
  </Container>
  )
}


export default Skills