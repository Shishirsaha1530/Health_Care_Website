import React, { useState, useEffect } from 'react';
import ServiceCard from '../SingleService/ServiceCard';

const Service = () => {
    let [service, setService] = useState([])
    // loading data
     useEffect(()=>{
        fetch('./service.json')
        .then(res=> res.json())
        .then(data=>setService(data))
    },[])
    return (
        // showing all the data
         <div className='mt-4 pb-3 container'>
            <div className="main">
                 <h4 className="title">Our Services </h4>
                 <p className='lead'>We Have Many Services For Making Yourself Fit Weather it's Physically or Mentally </p>
            </div>
            <div className='row mt-3 gy-4'>
                    {
                        service.map((item)=>{
                            return(
                                                
                                <div className='col-md-4' key={item.id}>
                                    <ServiceCard services={item}> </ServiceCard>
                                </div>           
                                )
                                })
                    }
            </div>
        </div>
    );
};

export default Service;