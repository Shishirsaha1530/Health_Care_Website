import React from 'react';

const GetStarted = () => {
    return (
        <div className='bg-primary row text-white py-4 mt-5 container-fluid'>
            <div className='col-md-8 container mx-auto d-flex justify-content-center'>
                <h2>Ready to try a Fitness Zone Workout?</h2>
            </div>
            <div className='col-md-4 container'>
                <button className='btn btn-dark'>Get Started Today</button>
            </div>
        </div>
    );
};

export default GetStarted;