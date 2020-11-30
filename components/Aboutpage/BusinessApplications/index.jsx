import React from 'react'
import './index.less'
import image from '../../../assets/aboutimage1.png'

const BusinessApplications = () =>{
    return(
        <section id='businessapplication'>
            <img src={image} alt='Not found'/>
            <div id='aboutdescription'>
                Business applications don't have to be complicated and boring. That’s why we built one that's simple and fun to use, yet powerful enough to run complex businesses at global scale. We started with the automotive industry by re-imagining automotive retail and bringing value to everyone in the ecosystem. Tekion’s flagship platform, Automotive Retail Cloud, is built using the most modern technology stack available. We're constantly innovating and inventing new technology along the way to overcome barriers and solve big problems, all while having a blast doing it!
            </div>
        </section>
    )
}
export default BusinessApplications