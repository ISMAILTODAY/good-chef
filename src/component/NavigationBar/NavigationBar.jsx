import React from 'react';

const NavigationBar = () => {
    return (
        <div>
            <div className=' bg-black text-zinc-50 px-10 flex justify-between items-center'>
                <h1 className='text-3xl font-semibold'><span className='text-[#ff55c2] ' >G</span>ood <span className='text-[#ff55c2] ' >C</span>hef</h1>
                <ul className='flex items-center  gap-10'>
                    <li>Home</li>
                    <li>Blog</li>
                    <li><img className='rounded-full w-[50px]' src="https://cdn-edcnk.nitrocdn.com/PSaIWXjqkelWPpnJnijqymZXwpeyImuQ/assets/images/optimized/rev-0fc88f9/wp-content/uploads/2021/10/Being-Simple.jpg" alt="" /></li>
                    <li><button>Login</button></li>
                </ul>
            </div>
        </div>
    );
};

export default NavigationBar;