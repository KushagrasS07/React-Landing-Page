import React from 'react';
import Laptop from '../assets/laptop.jpg';

function Analytics() {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={Laptop} alt="/" />
            <div className='flex flex-col justify-center'>
                <p className='text-emerald-400 font-bold '>Data Analytics DashBoard</p>
                <h1 className=' md:text-4xl sm:text-3xl text-2xl font-extrabold'>Manage Data Analytics Centrally</h1>
                <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehende</p>            
                <button className="bg-black w-[200px] rounded-md mx-auto md:mx-0 my-6 font-medium py-3 text-emerald-400">Get Started</button>
            </div>
        </div>
        
    </div>
  );
}

export default Analytics;