import React from 'react';
import aboutImg from '../../../image/weights-exercise-weightlifter-strong-athletic_1139-709.jpg'
import './About.css'
import AboutMotive from './AboutMotive';
import GetStarted from './GetStarted';

// About Page Function Code
const About = () => {
    return (
        <div className='mt-5'>
         <div className="main">
                 <h4 className="title">About Us</h4>
            </div>
             <div className='container mt-4'>
                <div className='row d-flex align-items-center'>
                  <div className='col-md-6'>
                        <img src={aboutImg} alt="" className='img-fluid'/>
                    </div>
                    <div className='col-md-6'>
                        <h3>Welcome to the Fitness Zone Family </h3>
                        <p className='my-4 text-justify'>There are no judgments here – No too much or not enough. No glares of disapproval. Here we keep open minds. We are nurturers. We seek only to encourage, empower and entertain. There is no one type. There is no one reason. There is no one way.

                        What we are is a diverse community; what we have is a culture of fun; what there is, is room for everyone: all kinds of people with all kinds of goals who’ve chosen to come reach them with us.
                         </p>
                    </div>
                </div>
            </div>

            <AboutMotive> </AboutMotive>
            <GetStarted></GetStarted>

        </div>
    );
};

export default About;