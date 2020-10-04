import React from 'react'
import Base from '../core/Base';
import img from '../images/boyAvtar.jpg'

export const profileSection = () =>{
    const getDataFromStorage = JSON.parse(localStorage.getItem('jwt') || '0')

    return (
    <div className="container text-center profileSection">
    <div className="row">
        <div className="col-sm-12 col-md-6">
            <h2>Profile Picture Section</h2>
            <img className="img-fluid" src={img} alt="" />
        </div>
        <div className="col-sm-12 col-md-6 text-center">
            <h2>User details</h2>
            <div className="details">
                <table class="center">
                    <thead>
                        <tr>
                            {/* <th colspan="2">User Details</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Name </td>
                            <td> {getDataFromStorage.user.name} </td>
                        </tr>
                        <tr>
                            <td>Email-Id </td>
                            <td>{getDataFromStorage.user.email}</td>
                        </tr>
                        <tr>
                            <td>Gender  </td>
                            <td>{getDataFromStorage.user.gender}</td>
                        </tr>
                        <tr>
                            <td>Mobile No  </td>
                            <td>{getDataFromStorage.user.phone}</td>
                        </tr>
                        <tr>
                            <td>Address  </td>
                            <td>Indore M.P, 452010</td>
                        </tr>
                        <tr>
                            <td>Last Login </td>
                            <td> {getDataFromStorage.user.last_login}</td>
                        </tr>
                    </tbody>
                </table>
            </div>    
        </div>
    </div>
</div>
    )
}


export const Profile = () => {



    return (
        <div>
            <Base title="Your Profile" description="">
                {/* <h1>Welcome to user dashboard page</h1> */}
                {profileSection()}
            </Base>
        </div>
    )
}


export default Profile;