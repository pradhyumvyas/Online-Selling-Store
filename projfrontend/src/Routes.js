import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";


import Home from "./core/Home"
import PrivateRoutes from './auth/helper/PrivateRoutes';
import Signup from './user/Signup';
import UserDashboard from './user/UserDashboard';
import Signin from './user/Signin';
import Cart from './core/Cart';
import Profile from './user/Profile';

import "./core/main_css/style.css"

const Routes =() =>{
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/signup" exact component={Signup}></Route>
            <Route path="/signin" exact component={Signin}></Route>
            <PrivateRoutes path="/user/dashboard" exact component={UserDashboard} />
            <PrivateRoutes path="/user/Profile" exact component={Profile} />
            <Route path="/cart" exact component={Cart}></Route>
            
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;