import React from 'react'
import logo from '../assets/Images/logo.png'
import AppStoreImage from '../assets/Images/AppStoreImage.png'
import GooglePlayImage from '../assets/Images/GooglePlayImage.png'

function Footer() {
    return (
        <div className='md:flex md:flex-row sm:flex-col justify-between items-center w-full p-5 bg-black'>
            <div className='sm:justify-center md:w-[40%]'>
                <img src={logo} className='object-contain' />
                <p className='text-[16px] text-white text-justify font-gilroy'>GlamourGo is a complete salon booking solution designed to simplify appointment scheduling and enhance customer experiences. With a user-friendly mobile app for clients and a powerful web-based admin panel for salon owners, we streamline operations and deliver effortless salon management.</p>
                <div className='md:flex md:flex-row sm:flex-col items-center mt-5 gap-5'>
                    <div className='mb-5 md:mb-0 md:w-[30%]'>
                        <img src={GooglePlayImage} className='object-contain w-[80%] ' />
                    </div>
                    <div className='mb-5 md:mb-0 md:w-[30%]'>
                    <img src={AppStoreImage} className='object-contain w-[80%]' />
                    </div>
                </div>
            </div>
            <div className='sm:justify-center md:w-[40%]'>
                <p className='text-[22px] text-white text-justify font-gilroy font-bold'>Contact Us</p>
                <p className='text-[16px] text-white text-justify font-gilroy font-medium'>Email: hello@glamourgo.com</p>
                <p className='text-[16px] text-white text-justify font-gilroy font-medium'>Phone: +92 (123) 456-7890</p>
                <p className='text-[16px] text-white text-justify font-gilroy font-medium'> Copyright ©  2025 - All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer