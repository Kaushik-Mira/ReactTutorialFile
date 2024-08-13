import { Button } from 'react-bootstrap';
import React, { useState } from 'react'

const ConditionalStateMent = () => {
    let [pshow, setPshow] = useState(false);
    let template = "";
    if(pshow) {
       template =
       <>
       <p>I am learning React Js</p>
        <Button className='m-4' onClick={() => setPshow(!pshow)}>Hide</Button>
       </>
    }else {
        template =  <Button className='m-4' onClick={() => setPshow(!pshow)}>Show</Button>
    }

  return ( 
    <div>
        {template}
       
    </div>
  )
}

export default ConditionalStateMent;
