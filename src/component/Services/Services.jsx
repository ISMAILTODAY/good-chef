import React from 'react';
import './Services.css'

const Services = () => {
    return (
        <div>
            <div>
                <h1 className='d-flex justify-content-center my-5'>Our Services</h1>
                <div className='flex flex-column flex-md-row d-md-flex justify-content-evenly align-items-center'>
                    <div className='shadow-lg card-size p-3 rounded bg-white'>
                        <img className='food-img p-2' src='https://i.ibb.co/3srtJJR/food2.jpg' alt="" />
                        <p className='text-center '>Good Food</p>
                    </div>
                    <div className='shadow-lg card-size p-1 rounded bg-white'>
                        <img className='deliver-img p-2' src="https://i.ibb.co/RvdwTbn/delivery.webp" alt="" />
                        <p className='text-center '>Delivery Food</p>
                    </div>
                    <div className='shadow-lg card-size p-3 rounded bg-white'>
                        <img className='chef-img pb-2' src="https://i.ibb.co/fqTjrCK/chef.webp" alt="" />
                        <p className='text-center '>Ordinary Chef</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;