import React, { useState } from 'react'
import logo from "../assets/Images/logo.png"
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

function Header() {
    const [toggle, setToggle] = useState(false)
    return (
        <div className='flex items-center justify-between bg-black border-1 border-black w-full'>
            <img src={logo} alt="" className='w-full max-w-[150px] h-auto' />
            <div className='hidden md:flex items-center gap-10 mr-[5%]'>
                <p className='text-white font-bold  md:text-[18px] hover:underline underline-offset-19 decoration-2  hover:text-[#D33D75]'>HOME</p>
                <p className='text-white font-bold  md:text-[18px] hover:underline underline-offset-19 decoration-2 hover:text-[#D33D75]'>About us</p>
                <p className='text-white font-bold  md:text-[18px] hover:underline underline-offset-19 decoration-2 hover:text-[#D33D75]'>Categories</p>
                <p className='text-white font-bold  md:text-[18px] hover:underline underline-offset-19 decoration-2 hover:text-[#D33D75]'>Specialists</p>
                <p className='text-white font-bold  md:text-[18px] hover:underline underline-offset-19 decoration-2 hover:text-[#D33D75]'>Special Offers</p>
            </div>
            <div className='md:hidden mr-[5%]'>
                {!toggle ?
                    <GiHamburgerMenu onClick={() => setToggle(true)} />
                    :
                    <IoMdClose onClick={() => setToggle(false)} />
                } 
            </div>
            <div className={`md:hidden ${toggle ? 'block' : 'hidden'} absolute top-[80px] left-0 right-0 bg-black py-5 text-center`}>
                <p className='text-white font-bold  md:text-[18px] md:hover:underline underline-offset-19 decoration-2  hover:text-[#D33D75] cursor-pointer'>HOME</p>
                <p className='text-white font-bold  md:text-[18px] md:hover:underline underline-offset-19 decoration-2 hover:text-[#D33D75] cursor-pointer'>About us</p>
                <p className='text-white font-bold  md:text-[18px] md:hover:underline underline-offset-19 decoration-2 hover:text-[#D33D75] cursor-pointer'>Categories</p>
                <p className='text-white font-bold  md:text-[18px] md:hover:underline underline-offset-19 decoration-2 hover:text-[#D33D75] cursor-pointer'>Specialists</p>
                <p className='text-white font-bold  md:text-[18px] md:hover:underline underline-offset-19 decoration-2 hover:text-[#D33D75] cursor-pointer'>Special Offers</p>
            </div>
        </div>
    )
}

export default Header