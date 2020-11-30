import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import MetaTags from 'react-meta-tags';
import CarouselTestimonials from "./CarouselTestimonials";
import Testimonialproducts from "./Testimonialproducts";


const Testimonials = () =>{

    return(
        <div>
            <MetaTags>
                <title>Tekions Testimonials - watch videos of our Dealer Partners</title>
                <meta name="description" content="Your description here.." />
                <meta property="og:title" content="Automotive Retail Cloud Product By Tekion" />
                <meta property="og:image" content="./images/tekion.png" />
            </MetaTags>
            <CarouselTestimonials/>
            <Testimonialproducts/>


        </div>
    )
}
export default withRouter(Testimonials)