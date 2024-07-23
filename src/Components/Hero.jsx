import React from "react";
import { ReactTyped } from "react-typed";

 const Hero=()=>{
    return(
        <div className="text-white">
            <div className="max-w-[800px] mt-[-96px] w-full  h-screen  mx-auto  text-center flex flex-col justify-center ">
                <p className="text-emerald-400 font-bold p-2">Growing With Data Analytics</p>
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py6">Grow With Data</h1>
                <div className="flex justify-center ">
                    <p className="md:text-4xl sm:text-2xl text-xl pt-1 font-bold " >Fast,Flexible financing for</p>
                    <ReactTyped 
                        className="md:text-4xl sm:text-2xl text-xl pt-1 font-bold pl-2"
                        strings={['BTB','BTC','SAAS']}
                        typeSpeed={150}
                        backSpeed={160}
                        loop
                    />
                </div>
                <p className="md:text-3xl sm:text-2xl text-xl pt-1 text-gray-500 font-semibold pl-2 ">Monitor your data analytics to increase revemue for BTB,BTC $ SASS platforms.</p>
                <button className="bg-emerald-400 w-[200px] rounded-md mx-auto my-6 font-medium py-3 text-black" >Get Started</button>
            </div>
        </div>
    );
}
export default Hero;  