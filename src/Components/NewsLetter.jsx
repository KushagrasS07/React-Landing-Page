import React from 'react';

function NewsLetter() {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto  grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-2' >
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips & tricks to optimise your flow?</h1>
                <p>Sign up to our newsletter and stay up to date</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input className="p-3 flex w-full rounded-md text-black" type="email" placeholder="Enter your Email"/>
                    <button className="bg-emerald-400  w-[200px] rounded-md ml-4 my-6 font-medium py-3 px-6 text-black">Notify Me</button>
                </div>
                <p className='text-white'>We care about protection of your data.Read our <span className='text-emerald-400'>Privacy Policy</span></p>
            </div>
        </div>
    </div>
  );
}

export default NewsLetter