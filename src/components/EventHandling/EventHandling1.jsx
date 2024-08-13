import React from 'react'
import { Button } from 'react-bootstrap';

const EventHandling1 = () => {
    const handleClick = () => {
        alert("Button was clicked");
    }
  return (
    <div>
      <Button onClick={handleClick}>Click me!</Button>
    </div>
  )
}

export default EventHandling1;
