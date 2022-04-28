import React from 'react'
import { Link } from 'react-router-dom'
import images from '../../constants/images'
import "./Navbar.style.scss"
const Navbar = () => {
  return (
    <nav className='navbar-container'>
        <div className='navbar-logo'>
            <img src={images.logoNav} alt="" />
        </div>
        <div className='navbar-links'>
            <ul>
                {['Home','About','Contact'].map((item)=>(
                    <li key={`link-${item}`}>
                        <Link className='nav-links' to={item}>{item}</Link>
                    </li>
                ))}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar