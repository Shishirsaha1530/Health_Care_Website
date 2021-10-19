import React  from 'react';
import { useParams } from 'react-router';
import packageDetails from '../../../Data/data'
const PackageDetails = () => {
    let {id} = useParams();
    let service = packageDetails.find(s=>s.id===id)
    return (
        <div className='row mt-4'>
        <div className='col-md-5  mx-auto'> 
             <div className="card shadow-lg  bg-body rounded" >
                <img src={service.image} className="card-img-top img-fluid" style={{height:"220px"}}  alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Package: {service.packageName} </h5>
                    <p className="card-text cardText" data-aos="flip-up">{service.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Package Id: {id}</li>
                    <li className="list-group-item">Package Duration: {service.packageDuration}</li>
                    <li className="list-group-item">Package Fee: {service.packageFee} taka</li>
                </ul>
                <div className="card-body">
                </div>
                </div>
        </div>
        </div>
    );
};

export default PackageDetails;