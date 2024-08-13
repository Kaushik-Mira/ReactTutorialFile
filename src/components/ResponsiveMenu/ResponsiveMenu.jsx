import React, { useState } from 'react'
import './ResponsiveMenu.css';

const ResponsiveMenu = () => {
    const [menu, setMenu] = useState(false);
  return (
    <div>
        <button className='micon' onClick={() => setMenu(!menu)}>
            {menu ? <span>&times;</span> : <span>&#9776;</span>}
        </button>
      <div className={`menu ${menu ? 'activeMenu' : ''}`}>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Course</li>
            <li>Gallery</li>
            <li>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default ResponsiveMenu;
