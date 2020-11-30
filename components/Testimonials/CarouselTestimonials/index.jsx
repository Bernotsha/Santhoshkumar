import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import './index.less'
import testimonial1 from '../../../assets/testimonial1.png'

const CarouselTestimonials = () =>{

    return(
        <section id='carouseltestimonials'>
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-interval=''>
                        <div id='flexwithimage' className='row'>
                            <div className='col-lg-6' id='carouselimage'>
                                <img src={testimonial1} alt='Image not found'/>
                            </div>
                            <div className='col-lg-6'>
                                <h1>Bowman Auto</h1>
                                <p style={{fontSize:'20px',marginTop:'50px'}}>"Having gone through multiple DMS changes over the last 27 years, the recent Tekion implementation was the smoothest I've ever seen...and it was done 100% remotely!"</p>
                                <div style={{marginTop:'30px'}}><a href="" style={{fontWeight:'bold'}}>WATCH TESTIMONIAL</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item" data-interval='2000'>
                    <div id='flexwithimage' className='row'>
                            <div className='col-lg-6' id='carouselimage'>
                                <img src={testimonial1} alt='Image not found'/>
                            </div>
                            <div className='col-lg-6'>
                                <h1>Bowman</h1>
                                <p style={{fontSize:'20px',marginTop:'50px'}}>"Having gone through multiple DMS changes over the last 27 years, the recent Tekion implementation was the smoothest I've ever seen...and it was done 100% remotely!"</p>
                                <div style={{marginTop:'30px'}}><a href="" style={{fontWeight:'bold'}}>WATCH TESTIMONIAL</a></div>
                            </div>
                        </div>                    
                    </div>
                    <div class="carousel-item" data-inteval='2000'>
                    <div id='flexwithimage' className='row'>
                            <div className='col-lg-6' id='carouselimage'>
                                <img src={testimonial1} alt='Image not found'/>
                            </div>
                            <div className='col-lg-6'>
                                <h1>Bowman Auto</h1>
                                <p style={{fontSize:'20px',marginTop:'50px'}}>"Having gone through multiple DMS changes over the last 27 years, the recent Tekion implementation was the smoothest I've ever seen...and it was done 100% remotely!"</p>
                                <div style={{marginTop:'30px'}}><a href="" style={{fontWeight:'bold'}}>WATCH TESTIMONIAL</a></div>
                            </div>
                        </div>                    
                    </div>
                </div>

            </div>          
        </section>
    )
}
export default CarouselTestimonials