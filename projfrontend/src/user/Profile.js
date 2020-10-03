import React from 'react'
import Base from '../core/Base';

const Profile = () => {
    return (
        <div>
            <Base title="Your Profile" description="">
                {/* <h1>Welcome to user dashboard page</h1> */}
                <div className="container text-center profileSection">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <h2>Profile Picture Section</h2>
                            <img className="img-fluid" src="https://avatars2.githubusercontent.com/u/38814603?v=4" alt="" />
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
                                        <tr className="naming">
                                            <td>Name </td>
                                            <td>Pradhyum Vyas</td>
                                        </tr>
                                        <tr className="naming">
                                            <td>Email-Id </td>
                                            <td>Pradhyum Vyas</td>
                                        </tr>
                                        <tr className="naming">
                                            <td>Gender  </td>
                                            <td>Pradhyum Vyas</td>
                                        </tr>
                                        <tr className="naming">
                                            <td>Mobile No  </td>
                                            <td>Pradhyum Vyas</td>
                                        </tr>
                                        <tr className="naming">
                                            <td>Address  </td>
                                            <td>Pradhyum Vyas</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>    
                        </div>
                    </div>
                </div>
            </Base>
        </div>
    )
}


export default Profile;