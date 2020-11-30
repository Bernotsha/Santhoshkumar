import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import MetaTags from 'react-meta-tags';
import BusinessApplications from "./BusinessApplications";
import Partners from "./Partners";


const About = () =>{
    return(
        <div>
            <MetaTags>
                <title>Creating World's Best Business Applications on the Cloud - Tekion</title>
                <meta name="description" content="Your description here.." />
                <meta property="og:title" content="Nandi Yamaha" />
                <meta property="og:image" content="Your path/to/image.jpg" />
            </MetaTags>
            <BusinessApplications/>
            <Partners/>
        </div>
    )
}
export default withRouter(About)