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
        <span className='skillDesc'>In this code, the multi function has been converted into an arrow function, and the logic remains the same.In this code, the multi function has been converted into an arrow function, and the logic remains the same</span>
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