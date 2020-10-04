import React from 'react'
import { Link } from 'react-router-dom'
import Base from '../core/Base'
import Profile,{profileSection} from './Profile'





const UserDashboard = ()  => {
    return (
        <div>
            <Base title="Your Dashboard" description="">
                <div className="ul nav nav-tabs bg-dark">
                    <li className="nav-item">
                        <Link className="nav-link" to="/user/Profile">Profile</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Your Orders</Link>
                    </li>
                </div>
                {profileSection()}
            </Base>
        </div>
    )
}


export default UserDashboard