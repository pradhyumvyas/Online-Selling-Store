import React, {Fragment} from 'react'
import {Link, withRouter} from 'react-router-dom'


import {signout, isAuthenticated } from '../auth/helper'

const currentTab = (history, path) =>{
    if(history.location.pathname === path){
        return {color:"#2ecc72"}
    } else{
        return{color:"#FFFFFF"}
    }
}

const Menu = ({history, path})  => {
    return (
        <div>
            <ul className="nav nav-tabs bg-dark">
                <li className="nav-item">
                    <Link className="nav-link" style={currentTab(history, "/")} to="/">Home</Link>
                </li>

                
                {isAuthenticated() && (

                <li className="nav-item">
                <Link className="nav-link" style={currentTab(history, "/cart")} to="/cart">Cart</Link>
                    
                </li>

                )}

                {isAuthenticated() && (
                
                <li className="nav-item">
                <Link 
                    className="nav-link" 
                    style={currentTab(history, "/user/dashboard")} 
                    to="/user/dashboard">Dashboard
                </Link>
                    
                </li>
                )}

                { !isAuthenticated() && (
                    
                    <Fragment>
                    <li className="nav-item">
                        <Link className="nav-link" style={currentTab(history, "/signup")} to="/signup">Signup</Link>
                                        
                    </li>
                
                    <li className="nav-item">
                        <Link className="nav-link" style={currentTab(history, "/signin")} to="/signin">Signin</Link>
                    </li>                        
                    </Fragment>

                )}

                    { isAuthenticated() &&(
                <li className="nav-item">
                <span 
                onClick={() =>{
                    {signout(() =>{
                        history.push("/")
                    })}
                }}
                className="nav-link text-warning">
                    Signout
                </span>
                
            </li>                        
                    )}
                
            </ul>
        </div>
    )
}


export default withRouter(Menu);