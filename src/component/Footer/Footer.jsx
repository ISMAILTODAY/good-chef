import React from 'react';
import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className='bg-black text-white p-5 mt-5'>
            <div className=' ps-5 grid md:grid-cols-3'>
                <div >
                    <h1>Social Link</h1>
                    <Link> <FaFacebook className='mt-3 '></FaFacebook></Link>
                    <Link><FaInstagramSquare className='my-3'></FaInstagramSquare></Link>
                    <Link> <FaTwitter></FaTwitter></Link>
                </div>
                <div>
                    <h1>Link</h1>
                    <Link className='d-block fs-5 text-decoration-none'>Home</Link>
                    <Link className='d-block fs-5 text-decoration-none'>Blog</Link>

                </div>
                <div>
                    <h1>Location</h1>
                    <p>Mount Vernon, <br /> 1920 Bernardo Street,<br /> Indiana</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;