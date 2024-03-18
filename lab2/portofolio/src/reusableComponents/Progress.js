import React from 'react'
import { ProgressBar } from 'react-bootstrap';
 

 const Progress=({now, label, variant})=> {
  return <ProgressBar now={now} label={label} variant={variant} />
}

export default Progress