import React from 'react'
import Base from '../core/Base'
import {UserApiCalls} from './helper/UserApiCalls'


const UserDashboard = ()  => {
    return (
        <div>
            <Base title="User Dashboard">
                {/* <h1>Welcome to user dashboard page</h1> */}
                <div className="text-center profileSection">
                    Name : {}

                </div>
            </Base>
        </div>
    )
}


export default UserDashboard