import { Button } from 'react-bootstrap';
import React, { useState } from 'react'

const UseStateHook = () => {
    let [count, setCount] = useState(0);
  return (
    <div>
        <h3>Count: {count}</h3>
      <Button className='m-3' onClick={() => setCount(count + 1)}>Click me!</Button>
    </div>
  )
}

export default UseStateHook;
