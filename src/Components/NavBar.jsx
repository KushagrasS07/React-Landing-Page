import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const NavBar=()=>{
    const[nav,setNav]=useState(false);

    const handleMenuBtn=()=>{
        setNav(!nav);
    }
    return(
        <div className="text-white  h-24 flex  items-center  justify-between   mx-auto  max-w-[1240px] px-4 " >
            <h1 className="w-full text-3xl font-bold text-emerald-400">React.</h1>
            <ul className="hidden md:flex ">
                <li className="p-4">Home</li>
                <li className="p-4">Company</li>
                <li className="p-4">Resources</li>
                <li className="p-4">About</li>
                <li className="p-4">Contact</li>
            </ul>
            <div onClick={handleMenuBtn} className="block md:hidden">
                {nav?<AiOutlineClose />:<AiOutlineMenu />}
            </div>
            <div className={nav?"fixed left-0 top-0  w-[60%]   bg-[#000300] border-r h-full  border-r-gray-900  ease-in-out duration-500" :"fixed left-[-100%]"}>
            
            <h1 className="w-full text-3xl font-bold m-4 text-emerald-400">React.</h1>

            <ul className=" uppercase font-bold">
                <li className="p-4 border-b border-gray-600">Home</li>
                <li className="p-4 border-b border-gray-600">Company</li>
                <li className="p-4 border-b border-gray-600">Resources</li>
                <li className="p-4 border-b border-gray-600">About</li>
                <li className="p-4">Contact</li>
            </ul>
            </div>
        </div>
    );
}
export default NavBar;