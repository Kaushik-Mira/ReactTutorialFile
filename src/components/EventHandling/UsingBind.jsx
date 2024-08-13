import React from 'react'
import { Button } from 'react-bootstrap';

const UsingBind = () => {
    const handleClick = (message) => {
        alert(message);
    }
  return (
    <div>
      <Button onClick={handleClick.bind(null, 'Button was clicked')}>Click Me</Button>
    </div>
  )
}

export default UsingBind;
