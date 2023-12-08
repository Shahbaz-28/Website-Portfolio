import React from 'react'
import '../../style/skills.css'
import UiDesign from '../../asset/ui-design.png'
import WebDesign from '../../asset/website-design.png'
import AppDesign from '../../asset/app-design.png'



const Skill = () => {
  return (
    <>
        <section id='skills'>
        <span className='skillTitle'>What I Do</span>
        <span className='skillDesc'>I am a skilled and passionate web designer with experience creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye of detail. Iam prficient in HTML, CSS, and Javascript, as well as design software such as Adobe Photoshop and Illustrator.</span>
        <div className='skillBars'>
           
           <div className='skillBar'>
            <img src={UiDesign} alt='' className='skillBarImg'/>
            <div className='skillBarText'>
                <h2>UI/UX Design</h2>
                <p>You can write your content here</p>
            </div>
           </div>

           <div className='skillBar'>
            <img src={WebDesign} alt='' className='skillBarImg'/>
            <div className='skillBarText'>
                <h2>Website Design</h2>
                <p>You can write your content here</p>
            </div>
           </div>

           <div className='skillBar'>
            <img src={WebDesign} alt='' className='skillBarImg'/>
            <div className='skillBarText'>
                <h2>APP Design</h2>
                <p>You can write your content here</p>
            </div>
           </div>
        </div>
        
        </section>
    </>
  )
}

export default Skill;