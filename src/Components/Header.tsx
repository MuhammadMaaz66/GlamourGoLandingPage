import React, { useState } from 'react'
import logo from "../assets/Images/logo.png"
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

function Header() {
    const [toggle, setToggle] = useState(false)
    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <div className='flex items-center justify-between bg-black border-1 border-black w-full sticky top-0 z-50 '>
            <img src={logo} alt="" className='w-full max-w-[150px] h-auto' />
            <div className='hidden md:flex items-center gap-10 mr-[5%]'>
                <p className='font-gilroy font-bold text-white  md:text-[18px] hover:underline underline-offset-19 decoration-2  hover:text-[#D33D75]' onClick={() => scrollToSection('hero')}>HOME</p>
                <p className='font-gilroy text-white font-bold  md:text-[18px] hover:underline underline-offset-19 decoration-2 hover:text-[#D33D75]' onClick={() => scrollToSection('about-us')}>About us</p>
                <p className='text-white font-gilroy font-bold  md:text-[18px] hover:underline underline-offset-19 decoration-2 hover:text-[#D33D75]' onClick={() => scrollToSection('categories')}>Categories</p>
                <p className='text-white font-gilroy font-bold  md:text-[18px] hover:underline underline-offset-19 decoration-2 hover:text-[#D33D75]' onClick={() => scrollToSection('specialist')}>Specialists</p>
                <p className='text-white font-gilroy font-bold  md:text-[18px] hover:underline underline-offset-19 decoration-2 hover:text-[#D33D75]' onClick={() => scrollToSection('special-offer')}>Special Offers</p>
            </div>
            <div className='md:hidden mr-[5%]'>
                {!toggle ?
                    <GiHamburgerMenu onClick={() => setToggle(true)} />
                    :
                    <IoMdClose onClick={() => setToggle(false)} />
                } 
            </div>
            <div className={`md:hidden ${toggle ? 'block' : 'hidden'} absolute top-[80px] left-0 right-0 bg-black py-5 text-center z-1`}>
                <p className='text-white font-gilroy font-bold   md:text-[18px] md:hover:underline underline-offset-19 decoration-2  hover:text-[#D33D75] cursor-pointer' onClick={() => scrollToSection('hero')}>HOME</p>
                <p className='text-white font-gilroy font-bold  md:text-[18px] md:hover:underline underline-offset-19 decoration-2 hover:text-[#D33D75] cursor-pointer' onClick={() => scrollToSection('about-us')}>About us</p>
                <p className='text-white font-gilroy font-bold  md:text-[18px] md:hover:underline underline-offset-19 decoration-2 hover:text-[#D33D75] cursor-pointer' onClick={() => scrollToSection('categories')}>Categories</p>
                <p className='text-white font-gilroy font-bold  md:text-[18px] md:hover:underline underline-offset-19 decoration-2 hover:text-[#D33D75] cursor-pointer' onClick={() => scrollToSection('specialist')}>Specialists</p>
                <p className='text-white font-gilroy font-bold  md:text-[18px] md:hover:underline underline-offset-19 decoration-2 hover:text-[#D33D75] cursor-pointer' onClick={() => scrollToSection('special-offers')}>Special Offers</p>
            </div>
        </div>
    )
}

export default Header