import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import googleImg from '../../../image/google.jpg'
import useAuth from './../../../Hooks/useAuth';

// login page desgin
const Login = () => {
    let { handleGoogleSignIn} = useAuth()
    return (
       <div className='row  container'>
            <div className='col-md-6 mx-auto'>
            <h4 className='text-success'> Please Login Here </h4>
                <div className="mb-3">
                        <label className="form-label mt-3">
                        Email address
                        </label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Type Your Email Address" required/>
                        <label className="form-label mt-3">
                        Your Password
                        </label>
                        <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="Type Your Password" required/>
                        </div>
                        <button className='btn btn-success submitBtn'> Submit </button>
                        <Link to="/registration" className='btn btn-danger ms-3 mt-md-0 mt-4'> New User??? Click Here  </Link>
                        <br />
                        <p className='mt-3'>sing in using google: </p>
                        <img className="googleImg" onClick={handleGoogleSignIn} src={googleImg} alt="" style={{height:"30px"}} />
                </div>
            </div>
    );
};

export default Login;