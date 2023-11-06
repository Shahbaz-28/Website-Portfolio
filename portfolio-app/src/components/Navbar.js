import React from 'react'
import '../style/navbar.css'
import logo from '../asset/logo.png'
import contactImg from '../asset/contact.png'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <div>
        <nav className='navbar'>
          <img src={logo} alt='Logo' className='logo'/>
          <div className='desktopMenu'>
           <Link className='desktopMenuListItem'>Home</Link>
           <Link className='desktopMenuListItem'>About</Link>
           <Link className='desktopMenuListItem'>Portfolio</Link>
           <Link className='desktopMenuListItem'>Clients</Link>
          </div>
          <button className='desktopMenuBtn'>
            <img src={contactImg} alt='' className='desktopMenuImg' /> Contact Me
          </button>
          
        </nav>
        
    </div>
  )
}

export default Navbar