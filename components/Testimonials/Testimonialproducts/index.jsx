import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import productimage from '../../../assets/testimonialproduct.png'
import './index.less'

const Testimonialproducts = () =>{

    return(
        <section id='testimonialproducts'>
            <div id='productrow' className='row'>
                <div className='col-lg-6' id='productimage'>
                    <img src={productimage}/>
                </div>
                <div className='col-lg-6' style={{padding:'60px'}}>
                    <div style={{color:'#fff',fontSize:'40px',textAlign:'center'}}>One platform that seemlessly connects your entire business.</div>
                    <div id='demobutton'><button>View Products</button></div>

                </div>
            </div>
        </section>
    )
}
export default Testimonialproducts