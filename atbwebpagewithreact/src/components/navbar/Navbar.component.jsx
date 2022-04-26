import React from 'react'
import images from '../../constants/images'
import "./Navbar.style.scss"
const Navbar = () => {
  return (
    <nav className='navbar-container'>
        <div className='navbar-logo'>
            <h1>ATB</h1>
        </div>
        <div className='navbar-links'>
            <ul>
                {['Home','About Me','My Works','Contact'].map((item)=>(
                    <li key={`link-${item}`}>
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar