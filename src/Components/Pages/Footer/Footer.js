import React from 'react';
import './Footer.css'
// footer section function
const Footer = () => {
    return (
        <div className='bg-dark container-fluid mt-4'>
            <div className='row py-4 container mx-auto text-white'>
                <div className='col-md-4 text-white'>
                <h4>Fitness Zone</h4>
                    <ul className='footerList'>
                        <li> Home </li>
                        <li> About Us </li>
                        <li> Our Services </li>
                        <li> Our Blogs </li>
                        <li> Contact Us </li>
                    </ul>
                </div>
                <div className='col-md-4 text-white'>
                   <h4>Resources</h4>
                    <ul className='footerList'>
                        <li> Youtube  </li>
                        <li> Ebooks </li>
                        <li> Careers </li>
                    </ul>
                </div>
                <div className='col-md-4'>
                     <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Type Your Email"/>
                     <button className='btn btn-danger btn-sm my-2'>Subscribe Us</button>
                      <br />
                     <small>
                         Our Office: <br />
                         House: 148, Block:B <br />
                         Sector: 10, Uttara, Dhaka
                     </small>
                </div>
            </div>
        </div>
    );
};

export default Footer;