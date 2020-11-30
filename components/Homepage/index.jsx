import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import MetaTags from 'react-meta-tags';
import WebHeader from "./WebHeader";
import AutomativeRetail from './AutomativeRetail'
import TekionFeatures from "./TekionFeatures";
import Benefits from './Benefits'
import AdditionalFeatures from "./AdditionalFeatures";
import Departments from "./Departments";
import Navigation from "./Navigation";
import Footer from './Footer'
import Section3 from "./Section3";
import Section5 from "./Section5";


const Home = () =>{

    return(
        <div>
            <MetaTags>
                <title>Automotive Retail Cloud Product By Tekion</title>
                <meta name="description" content="Your description here.." />
                <meta property="og:title" content="Automotive Retail Cloud Product By Tekion" />
                <meta property="og:image" content="./images/tekion.png" />
            </MetaTags>
            <Navigation/>
            <AutomativeRetail/>
            <Benefits/>
            <Section3/>
            <Departments/>
            <TekionFeatures/>
            <Section5/>
            <AdditionalFeatures/>
            <Footer/>
        </div>
    )
}
export default withRouter(Home)