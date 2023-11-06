import React from 'react'
import '../../style/intro.css'
import { Link } from 'react-scroll'
import btnImg from '../../asset/hireme.png'
import bg from '../../asset/image.png'
import ds from '../../asset/3d-rendering-removebg-preview.png'

const Intro = () => {
  return (
    <section id='intro'>
    <div className='introContent'>
     <span className='hello'>Hello</span>
     <span className='introText'>I'm <span className='introName'>Shahbaz</span><br/>
     Website Designer
     </span>
     <p className='introPara'> I am a skilled web designer with experience in creating <br/>visually appealling and user-friendly websites</p>
      <Link><button className='btn'> <img src={btnImg} alt='' className='btnImg'/> Hire me</button></Link>
    </div>
    <img src={ds} alt='Profile'  className='bg'/> 
    </section>
      
  )
}

export default Intro