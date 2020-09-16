import React, {useState} from 'react'
import Base from '../core/Base'
import {Link} from "react-router-dom"
import {signup} from '../auth/helper'

const Signup = () => {

    const [values, setValues] = useState({
        name:"",
        phone:"",
        gender:"",
        email:"",
        password:"" ,
        confirmPassword:"",
        error:"",
        sucess:false,
    })

    const {name,phone,gender, email, password,confirmPassword, error, sucess} = values;

    const handleChange = name => event =>{
        setValues({...values, error:false, [name]:event.target.value})
    }

    const onSubmit = (event) =>{
        if(password === confirmPassword){
            event.preventDefault();
            setValues({...values, error:false})
            signup({name, phone,gender, email, password})
            .then((data) =>{
                console.log("Data", data);
                if(data.email === email){
                    setValues({
                        ...values,
                        name:"",
                        phone:"",
                        gender:"",
                        email:"",
                        password:"",
                        error:"",
                        sucess:true
                    })
                }
                else{
                    setValues({
                        ...values,
                        error:true,
                        success:false
                    })
                }
            })
            .catch((e) => console.log(e))
        } else{
            alert("Password dont match")
        }


    }

    const successMessage = () =>{
        return(
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <div 
                        className="alert alert-success"
                        style={{display: sucess ? "" : "none"}}
                    >
                        New Account Created SuccessFully, Please <Link to="/signin" >Login Now</Link> 
                    </div>
                </div>
            </div>
        )
    }

    const errorMessage = () =>{
        return(
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <div 
                        className="alert alert-danger"
                        style={{display: error ? "" : "none"}}
                    >
                        Check all fields again
                    </div>
                </div>
            </div>
        )
    }


    const signupForm = () => {
        return(
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form>
                        <div className="form-group">
                            <label className="text-light">Full Name</label>
                                <input type="text" className="form-control"
                                value={name}
                                onChange={handleChange("name")}
                                required
                                />
                        </div>

                        <div className="form-group">
                            <label className="text-light">Phone No</label>
                                <input type="text" className="form-control"
                                value={phone}
                                onChange={handleChange("phone")}
                                required
                                />
                        </div>
                        <div className="form-group">
                            <label className="text-light">Gender</label>
                                <input type="text" className="form-control"
                                value={gender}
                                onChange={handleChange("gender")}
                                />
                        </div>
                        <div className="form-group">
                            <label className="text-light"> Email</label>
                                <input type="text" className="form-control"
                                value={email}
                                onChange={handleChange("email")}
                                required
                                />
                        </div>
                        <div className="form-group">
                            <label className="text-light"> Password </label>
                                <input type="password" className="form-control"
                                value={password}
                                onChange={handleChange("password")}
                                required
                                />
                        </div>
                        <div className="form-group">
                            <label className="text-light">Confirm Password </label>
                                <input type="password" className="form-control"
                                value={confirmPassword}
                                onChange={handleChange("confirmPassword")}
                                required
                                />
                        </div>
                        <button className="btn btn-success btn-block" onClick={onSubmit}>
                            SignUp</button>
                    </form>
                </div>
            </div>
        )
    }

    return (
        <Base title="Sign Up Page" description="A Signup For Store">
            {successMessage()}
            {errorMessage()}
            {signupForm()}
            {/* <p className="text-white text-center">
                {JSON.stringify(values)}
            </p> */}
        </Base>
    )
}


export default Signup