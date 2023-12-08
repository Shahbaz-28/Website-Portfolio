import React from 'react'
import '../Works/work.css'
import portfolio1 from '../../asset/portfolio-1.png'
import portfolio2 from '../../asset/portfolio-2.png'
import portfolio3 from '../../asset/portfolio-3.png'
import portfolio4 from '../../asset/portfolio-4.png'
import portfolio5 from '../../asset/portfolio-5.png'
import portfolio6 from '../../asset/portfolio-6.png'

const Work = () => {
  return (
    <section id='works'>
    <h2 className='workstitle'>My Portfolio</h2>
     <span className='workDesc'>I take pride in paying attention to the smallest details and making sure that my work is pixle pefect. I am excited to bring my skills and experience to help businesses achieve their goals and to create a strong online presence</span>
     <div className='worksImgs'>
        <img src={portfolio1} alt='' className='worksImg'/>
        <img src={portfolio2} alt='' className='worksImg'/>
        <img src={portfolio3} alt='' className='worksImg'/>
        <img src={portfolio4} alt='' className='worksImg'/>
        <img src={portfolio5} alt='' className='worksImg'/>
        <img src={portfolio6} alt='' className='worksImg'/>
    
     </div>
     <button className='workBtn'>See More</button>
    </section>
  )
}

export default Work