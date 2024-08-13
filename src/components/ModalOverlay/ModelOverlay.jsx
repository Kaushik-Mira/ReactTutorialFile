import React, { useState } from 'react'
import './ModelOverlay.css';
import { Button } from 'react-bootstrap';

const ModelOverlay = () => {
    let [modelStatus, setModelStatus] = useState(false);
  return (
    <div>
      <div className={`modelOverlay ${modelStatus ? 'modelShow' : ''}`}></div>
      <div className={`modelDiv ${modelStatus ? 'showModelDiv' : ''}`}>
        <h2>Enquiry Now</h2>
        <span onClick={() => setModelStatus(!modelStatus)}>&times;</span>
      </div>
      <Button className='m-5' onClick={() => setModelStatus(!modelStatus)}>Open Model</Button>
    </div>
  )
}

export default ModelOverlay;
