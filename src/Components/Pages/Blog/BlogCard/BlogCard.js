import React from 'react';
import './BlogCard.css'
const BlogCard = (props) => {
    const {vlogName, description, image}=props.blogs;
    return (
        <div>
            <div className="card shadow-lg  bg-body rounded" >
                <img src={image} className="card-img-top img-fluid" style={{height:"220px"}}  alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Course: {vlogName} </h5>
                    <p className="card-text cardText" data-aos="flip-up">{description}</p>
                </div>
                <div className="card-body">
                </div>
                </div>
        </div>
    );
};

export default BlogCard;