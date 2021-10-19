import React from 'react';
import { Link } from 'react-router-dom';
import googleImg from '../../../image/google.jpg'
const Registration = () => {
    return (
        <div className='row  container'>
            <div className='col-md-6 mx-auto'>
            <h4 className='text-success'> Please Registration Here </h4>
                <div className="mb-3">
                        <label className="form-label mt-3">
                        Your Name
                        </label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Type Your Name" required/>
                        <label className="form-label mt-3">
                        Your Phone Number
                        </label>
                        <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Type Your Phone Number" required/>
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
                        <Link to="/login" className='btn btn-danger ms-3'> Old User??? Click Here  </Link>
                        <br />
                        <p className='mt-3'>sing in using google: </p>
                        <img className="googleImg" src={googleImg} alt="" style={{height:"30px"}} />
                </div>
            </div>
    );
};

export default Registration;