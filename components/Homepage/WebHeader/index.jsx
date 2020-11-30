import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import './index.less'


const WebHeader = () =>{
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
    }
    return(
        <div>
            <div id="navbar">

                <ul>
                    <li><a href="#home" className="active">Products</a></li>
                    <li><a href="#news">Testimonials</a></li>
                    <li><a href="#contact">About us</a></li>
                    <li><a href="#contact">News &amp Blog</a></li>
                    <li><a href="#contact">Open API's</a></li>
                    <li style={{float:"right"}}><a href="">Request Demo</a></li>
                </ul>
            </div>
        </div>
    )
}
export default WebHeader