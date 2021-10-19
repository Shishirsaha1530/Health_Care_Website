import React from 'react';
import { Link } from 'react-router-dom';
import googleImg from '../../../image/google.jpg'
import useAuth from './../../../Hooks/useAuth';

// code for registration page
const Registration = () => {
    const { error, getName, getEmail, userRegistration, getPassword, handleGoogleSignIn } =
    useAuth();
    return (
        <div className='row  container'>
            <div className='col-md-6 mx-auto'>
            <h4 className='text-success'> Please Registration Here </h4>
              <div className="text-danger" style={{ height: "50px" }}>
                    {error}
              </div>
                <div className="mb-3">
                        <label className="form-label mt-3">
                        Your Name
                        </label>
                        <input onChange={getName} type="text" className="form-control" id="exampleFormControlInput1" placeholder="Type Your Name" required/>

                        <label className="form-label mt-3">
                        Email address
                        </label>
                        <input onChange={getEmail} type="email" className="form-control" id="exampleFormControlInput1" placeholder="Type Your Email Address" required/>

                        <label className="form-label mt-3">
                        Your Password
                        </label>
                        <input onChange={getPassword} type="password" className="form-control" id="exampleFormControlInput1" placeholder="Type Your Password" required/>
                        </div>

                        <button onClick={userRegistration} type='submit' className='btn btn-success submitBtn'> Submit </button>
                        <Link to="/login" className='btn btn-danger ms-3 mt-md-0 mt-4'> Old User??? Click Here  </Link>
                        <br />
                        <p className='mt-3'>sing in using google: </p>
                        <img onClick={handleGoogleSignIn} className="googleImg" src={googleImg} alt="" style={{height:"30px"}} />
                </div>
            </div>
    );
};

export default Registration;