import React, { useState } from 'react'

const ShowHidePassword = () => {
    const [pstatus, setPstatus] = useState(false);


  return (
    <div>
        <input type={pstatus ? 'text' : 'password'} placeholder='Password'/>
        <button onClick={() => setPstatus(!pstatus)}>
            {pstatus ? 'Hide' : 'Show'}
        </button>
    </div>
  )
}

export default ShowHidePassword;
