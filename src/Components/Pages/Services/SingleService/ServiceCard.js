import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = (props) => {
    const {packageName, description, packageDuration, packageFee, image, id} = props.services;
    return (
        <div>
        {/* showing single package  data on card  */}
             <div className="card shadow-lg  bg-body rounded" >
                <img src={image} className="card-img-top img-fluid" style={{height:"220px"}}  alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Package: {packageName} </h5>
                    <p className="card-text cardText" data-aos="flip-up">{description}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Package Duration: {packageDuration}</li>
                    <li className="list-group-item">Package Fee: {packageFee} taka</li>
                </ul>
                <div className="card-body">
                </div>
                <Link to={`/booking/${id}`} className='btn btn-success'>Book Now</Link>
                </div>
        </div>
    );
};

export default ServiceCard;