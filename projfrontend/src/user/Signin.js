import React, {useState} from 'react'
import Base from '../core/Base'
import { Link, Redirect } from 'react-router-dom'
import { signin, authenticate, isAuthenticated } from '../auth/helper'

const Signin = () => {

    const [values, setValues] = useState({
        name:"",
        email:"seven@pradhyum.com",
        password:"12345",
        error:"",
        sucess:false,
        loading:false,
        didRedirect:false
    })

    const {name, email, password, error, sucess, loading, didRedirect} = values;


    const handleChange = name => event =>{
        setValues({...values, error:false, [name]:event.target.value})
    }


    const onSubmit = (event) =>{
        event.preventDefault();
        setValues({...values, error:false, loading:true})
        signin({email, password})
        .then(
            data=>{
                console.log("DATA" , data);
                if(data.token){
                    let sessionToken = data.token;
                    authenticate(sessionToken, () => {
                        console.log("TOKEN ADDED");
                        setValues({
                            ...values,
                            didRedirect:true
                        })
                    })
                } else{
                    setValues({
                        ...values,
                        loading:false
                    })
                }
            }
        )
        .catch((e) => console.log(e))
    }

    const performRedirect= () =>{
        if(isAuthenticated()){
            return <Redirect to="/" />
        }
    }

    const loadingMessage = () =>{
        return (
            loading && (
                <div className="alert alert-info">
                    <h2>Loading...</h2>
                </div>
            )
        )
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


    
    const signinForm = () => {
        return(
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form>
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
                            Login</button>
                    </form>
                </div>
            </div>
        )
    }
    
    return (
        <Base title="Welcome To SignIn" description="A T-shirt Store">
            {loadingMessage()}
            {signinForm()}
            <p className="text-center"> {JSON.stringify(values)} </p>

            {performRedirect()}
        </Base>
    )
}


export default Signin;