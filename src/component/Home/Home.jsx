import React from 'react';

const Home = () => {
    return (
        <div className=' bg-[#a7dbd8] '>
            <div className='p-10 flex items-center justify-evenly '>
                <h1 className='text-5xl font-bold'>
                    <h1 className='mb-5 ml-[-100px]'>
                        <span className='text-[#ff55c2]'>Good</span>
                        food is the</h1>
                    <span className='text-[#ff55c2]'>foundation</span>
                    of <h1 className='mt-5 ml-[100px]'>genuine <span className='text-[#ff55c2]'>
                        happiness</span>
                    </h1>
                </h1>
                <img className='w-[40%] rounded-lg shadow-lg' src="./../../../public/image/chinese-food.png" alt="" />
            </div>

        </div>
    );
};

export default Home;