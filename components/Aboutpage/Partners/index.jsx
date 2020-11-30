import React from 'react'
import './index.less'
import partner1 from '../../../assets/partner1.png'
import partner2 from '../../../assets/partner2.png'
import partner3 from '../../../assets/partner3.png'
import partner4 from '../../../assets/partner4.png'
import partner5 from '../../../assets/partner5.png'
import partner6 from '../../../assets/partner6.png'


const Partners = () =>{
    return(
        <section id='partners'>
            <div style={{textAlign:'center'}}><h1>Partners</h1></div>
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-interval=''>
                        <div className='row'>
                            <div className='col-lg-6' style={{height:'600px'}}>
                                <img src={partner1} style={{width:'100%', height:'100%'}} alt='Image not found'/>
                            </div>
                            <div className='col-lg-6' style={{height:'600px'}}>
                                <img src={partner2} style={{width:'100%', height:'100%'}} alt='Image not found'/>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item" data-interval=''>
                    <div className='row'>
                            <div className='col-lg-6' style={{height:'600px'}}>
                                <img src={partner3} style={{width:'100%', height:'100%'}} alt='Image not found'/>
                            </div>
                            <div className='col-lg-6' style={{height:'600px'}}>
                                <img src={partner4} style={{width:'100%', height:'100%'}} alt='Image not found'/>
                            </div>
                        </div>                    </div>
                    <div class="carousel-item">
                    <div className='row'>
                            <div className='col-lg-6' style={{height:'600px'}}>
                                <img src={partner5} style={{width:'100%', height:'100%'}} alt='Image not found'/>
                            </div>
                            <div className='col-lg-6' style={{height:'600px'}}>
                                <img src={partner6} style={{width:'100%', height:'100%'}} alt='Image not found'/>
                            </div>
                        </div>                    </div>
                </div>

            </div> 
        </section>
    )
}
export default Partners