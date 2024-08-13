import React, { useState } from 'react'
import { Link} from 'react-router-dom';
import './Layout.css';
import logo from '../assets/youtube.png';
const Layout = () => {
  let [menu, setMenu] = useState("home");
  return (
    <div>
      <header>
        <img src={logo} alt=''/>
        <nav>
          <ul>
            <li className={menu === "home" ? 'active' : ''} onClick={() => setMenu("home")}><Link to="/">Home</Link></li>
            <li className={menu === "blog" ? 'active' : ''} onClick={() => setMenu("blog")}><Link to="/">Blog</Link></li>
            <li className={menu === "contact" ? 'active' : ''} onClick={() => setMenu("contact")}><Link to="/">Contact</Link></li>
          </ul>
        </nav>
        <div className='right_section'>
         <button>Login</button>
        </div>
      </header>
    </div>
  )
}

export default Layout;
