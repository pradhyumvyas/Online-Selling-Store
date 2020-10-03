import React from 'react'
import { Link } from 'react-router-dom'
import Base from '../core/Base'



const UserDashboard = ()  => {
    return (
        <div>
            <Base title="Your Dashboard" description="">
                <div className="ul nav nav-tabs bg-dark">
                    <li className="nav-item">
                        <Link className="nav-link" to="/user/Profile">Profile</Link>
                    </li>
                </div>
            </Base>
        </div>
    )
}


export default UserDashboard