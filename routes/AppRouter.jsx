import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ContextAPI } from '../components/ContextApi';
import ScrollToTop from '../components/ScrollToTop'

import Homepage from '../components/Homepage'
import Aboutpage from '../components/Aboutpage'
import Testimonials from '../components/Testimonials'

const AppRouter = () =>{

    const [bookingDetails, setBookingDetails] = useState({})

    return(
    
        <ContextAPI.Provider value = {{ bookingDetails, setBookingDetails }}>
    <Router>
        <ScrollToTop>
        <Switch>
            <Route path="/testimonials" component={Testimonials} />
            <Route path='/about-us' component={Aboutpage}/>
            <Route exact path="/products" component={Homepage} />
        </Switch>
        </ScrollToTop>
    </Router>
    </ContextAPI.Provider>
    );

}
export default AppRouter;