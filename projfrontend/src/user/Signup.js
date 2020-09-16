import React, {useState} from 'react'
import Base from '../core/Base'
import {Link} from "react-router-dom"
import {signup} from '../auth/helper'

const Signup = () => {

    const [values, setValues] = useState({
        name:"",
        email:"",
        password:"" ,
        error:"",
        sucess:false,
    })

    const {name, email, password, error, sucess} = values;

    const handleChange = name => event =>{
        setValues({...values, error:false, [name]:event.target.value})
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        setValues({...values, error:false})
        signup({name, email, password})
        .then((data) =>{
            console.log("Data", data);
            if(data.email === email){
                setValues({
                    ...values,
                    name:"",
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
                            <label className="text-light">Name</label>
                                <input type="text" className="form-control"
                                value={name}
                                onChange={handleChange("name")}
                                />
                        </div>
                        <div className="form-group">
                            <label className="text-light"> Email</label>
                                <input type="text" className="form-control"
                                value={email}
                                onChange={handleChange("email")}
                                />
                        </div>
                        <div className="form-group">
                            <label className="text-light"> password </label>
                                <input type="password" className="form-control"
                                value={password}
                                onChange={handleChange("password")}
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