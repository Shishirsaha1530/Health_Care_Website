import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard/BlogCard';

// Function for showing all the blogs 
const Blog = () => {
    let [blogs, setBlogs]=useState([])
    useEffect(()=>{
        fetch('./blog.json')
        .then(res=>res.json())
        .then(data=>{
            setBlogs(data)
        })
    },[])
    return (
        <div className='mt-4 pb-3 container'>
            <div className="main">
                 <h4 className="title">Our Latest Blogs </h4>
                 <p className='lead'>Read Our Latest Blogs for Free Tips and Health Related News </p>
            </div>
            <div className='row mt-3 gy-4'>
                    {
                        blogs.map((blog)=>{
                            return(
                                                
                                <div className='col-md-4' key={blog.id}>
                                    <BlogCard blogs={blog}> </BlogCard>
                                </div>           
                                )
                                })
                    }
            </div>
        </div>
    );
};

export default Blog;