import React, { useState } from 'react'
import '../style/navbar.css'
import logo from '../asset/logo.png'
import contactImg from '../asset/contact.png'
import { Link } from 'react-scroll'
import menu from '../asset/menu.png';

const Navbar = () => {
  
  const [showMenu, setshowMenu] = useState(false)

  return (
    <div>
        <nav className='navbar'style={{ position: 'fixed', top: 0, width: '100%', zIndex: 100 }} >
          <img src={logo} alt='Logo' className='logo'/>
          <div className='desktopMenu'>
           <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-150} duration={500} className='desktopMenuListItem'>Home</Link>
           <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-80} duration={500} className='desktopMenuListItem'>About</Link>
           <Link activeClass='active' to='works' spy={true} smooth={true} offset={-80} duration={500} className='desktopMenuListItem'>Portfolio</Link>
           <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-80} duration={500} className='desktopMenuListItem'>Clients</Link>
          </div>
          <button className='desktopMenuBtn' onClick={()=>{
                   document.getElementById('contact').scrollIntoView({behavior:"smooth"})
          }} >
            <img src={contactImg} alt='' className='desktopMenuImg' /> Contact Me
          </button>
            {/* BURGER MENUE */}
          <img src={menu} alt='Menu' className='mobMenu' onClick={()=>setshowMenu(!showMenu)} />
          <div className='navMenu' style={{display: showMenu? 'flex': 'none'}} >
           <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-150} duration={500} className='listItem' onClick={()=>setshowMenu(false)}>Home</Link>
           <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-80} duration={500} className='listItem' onClick={()=>setshowMenu(false)}>About</Link>
           <Link activeClass='active' to='works' spy={true} smooth={true} offset={-80} duration={500} className='listItem' onClick={()=>setshowMenu(false)}>Portfolio</Link>
           <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-80} duration={500} className='listItem' onClick={()=>setshowMenu(false)}>Clients</Link>
           <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-80} duration={500} className='listItem' onClick={()=>setshowMenu(false)}>Contact</Link>
          </div>
        </nav>
        
    </div>
  )
}

export default Navbar