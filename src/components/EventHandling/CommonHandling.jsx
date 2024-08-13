import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

const CommonHandling = () => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`A name was submitted: ${value}`);
    }
  return (
    <div>
      <form onSubmit={handleSubmit}> 
        <label>Name: 
            <input type='text' value={value} onChange={handleChange}/>
        </label>
        <Button type='submit'>Submit</Button>
      </form>
    </div>
  )
}

export default CommonHandling;
