import React from 'react'
import  '../Contect/Contacts.css'
import walmart from '../../asset/walmart.png'
import Adobe from '../../asset/adobe.png'
import Microsoft from '../../asset/microsoft.png'
import Facebook from '../../asset/facebook.png'

import FacebookIcon from '../../asset/facebook-icon.png'
import TwitterIcon from '../../asset/twitter.png'
import YoutubeIcon from '../../asset/youtube.png'
import InstagramIcon from '../../asset/instagram.png'


const Contacts = () => {
  return (
    <section id='contactPage'>
        <div className='clients'>
            <h1 className='contactPageTitle'>My Clients</h1>
            <p className='clientDesc'>
                I have had the oppotunity to work with a diverse group of companies.
                some of the notable companies I have worked with includes
            </p>
            <div className='clientImgs'>
                <img src={walmart} alt='client' className='clientImg'/>
                <img src={Adobe} alt='client' className='clientImg'/>
                <img src={Microsoft} alt='client' className='clientImg'/>
                <img src={Facebook} alt='client' className='clientImg'/>
            </div>
        </div>
        <div id='contact'>
        <h1 className='contactPageTitle'>Contact Me</h1>
        <span className='contactDesc'>Please fill out the form below to discuss any work opportunities</span>
        <form className='contactForm'>
        <input type='text' placeholder='Your name' className='name'/>
        <input type='email' placeholder='Your email' className='email'/>
        <input type='text' placeholder='Your name' className='name'/>
        <textarea className='msg' rows='5' placeholder='Your Message'></textarea>
         <button type='submit' value='Send' className='submitBtn'>Submit</button>
         <div className='links'>
            <img src={FacebookIcon} alt='' className='link'/>
            <img src={TwitterIcon} alt='' className='link'/>
            <img src={YoutubeIcon} alt='' className='link'/>
            <img src={InstagramIcon} alt='' className='link'/>
         </div>
        </form>
        </div>
    </section>
  )
}

export default Contacts