import React from 'react';
import './Contact.css';
import FindUsPage from './FindUsPage';

// contact us page function
const ContactUsPage = () => {
    return (
        <div className='container mt-5'>
        <div className="shadow-lg py-4">
           <div className="main ">
                 <h4 className="title">Contact Us </h4>
            </div>
            <div className='row'>
                <div className='col-md-8 mx-auto'>
                    <div className="mb-3">
                        <label className="form-label">
                        Your Name 
                        </label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Type Your Name"/>
                        <label className="form-label mt-3">
                        Email address
                        </label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Type Your Email Address"/>
                        <label className="form-label mt-3">
                        Your Phone Number
                        </label>
                        <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Type Your Phone Number"/>
                        </div>
                        <div className="my-3">
                        <label className="form-label">
                        Your Message</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button className='btn btn-success submitBtn'> Submit </button>
                </div>
            </div>
            </div>
            <FindUsPage> </FindUsPage>
        </div>
    );
};

export default ContactUsPage;