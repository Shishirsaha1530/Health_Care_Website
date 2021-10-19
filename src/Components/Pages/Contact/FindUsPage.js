import React from 'react';
import findImg from '../../../image/undraw_working_out_6psf.svg'
const FindUsPage = () => {
    return (
         <div className='mt-5'>
         <div className="main">
                 <h4 className="title">Find Us</h4>
            </div>
             <div className='container mt-4'>
                <div className='row d-flex align-items-center'>
                  
                    <div className='col-md-6' data-aos="fade-right">
                    <h4>Find Us On Google Map</h4>
                       <iframe title='GoodleMap' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29186.92013258742!2d90.360778338187!3d23.876671852776663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c5d05e7074dd%3A0xd1c58803049f00c7!2sUttara%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1633343660993!5m2!1sen!2sbd" loading="lazy"> </iframe>
                    </div>

                    <div className='col-md-6' data-aos="fade-left">
                        <img src={findImg} alt="" className='img-fluid'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FindUsPage;