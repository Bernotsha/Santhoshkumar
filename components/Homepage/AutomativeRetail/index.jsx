import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import './index.less'
import image1 from '../../../assets/automative.jpg'


const AutomativeRetail = () =>{

    return(
        <section id='automativeretail'>
            <div id='textonimage'>
                <img src={image1} id='retailimage' alt='cannot add images'/>
                <div id='discoverbutton'><button>Discover Products</button></div>
            </div>
        </section>
    )
}
export default AutomativeRetail