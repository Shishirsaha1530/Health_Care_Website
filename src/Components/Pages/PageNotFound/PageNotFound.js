import React from 'react';
import pageNotFoundIMg from '../../../image/banner_error_404.jpg';
import {NavLink} from 'react-router-dom';
// if page is not availble function
const PageNotFound = () => {
    return (
        <div className='container'>
            <div className='row my-5 '>
                <div className='col-md-10 mx-auto'>
                    <img src={pageNotFoundIMg} alt="" className="img-fluid" /> <br />
                    <NavLink to="/" className='btn btn-success mt-3'> Home Page </NavLink>
                </div>
            </div>
        </div>
    );
};

export default PageNotFound;