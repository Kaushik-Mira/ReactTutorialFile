import React from 'react'
import {Button} from 'react-bootstrap';
const EventHandling2 = () => {
    const handleClick = (message) => {
        alert(message);
    }
  return (
    <div>
       <Button onClick={()=> handleClick('Button was clicked')}>Click me!</Button>
    </div>
  )
}

export default EventHandling2;
