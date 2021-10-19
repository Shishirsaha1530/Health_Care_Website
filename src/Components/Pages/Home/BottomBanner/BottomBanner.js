import React,{useEffect} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from 'react-router-dom';
import bannerImg from '../../../../image/undraw_fitness_stats_sht6.svg'

// function code for bottom banner on home page
const BottomBanner = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200,
             once:true
          })        
    })
    return (
        <div className='homePage mt-5'>
            <div className='container '>
                <div className='row d-flex align-items-center'>
                    <div className='col-md-6' data-aos="fade-right">
                        <h3>Get more with low-cost training programs and advanced features </h3>
                        <p className='my-4 text-justify'>If you want more guidance or additional tools to get the most out of all the content available, we also have low-cost, professionally developed programs and meal plans to follow, and a monthly membership that adds extra, exclusive workout videos, monthly workout challenges, and a growing list of advanced features for planning and tracking your workouts.
                         </p>
                        <NavLink to='/service' className='btn_get_started mt-3 mt-md-0'> See Services </NavLink>
                    </div>
                    <div className='col-md-6 mt-md-0 mt-5' data-aos="fade-left">
                        <img src={bannerImg} alt="" className='img-fluid'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BottomBanner;