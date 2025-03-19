import React from 'react'
import HeroImage from '../assets/Images/HeroSectionImage.png'
import Brush from '../assets/Images/BrushImage.png'
import ScissorImage from '../assets/Images/ScissorImage.png'

function HeroSection() {
    return (
        <div className=''>
            <div className='md:w-[28%] sm:w-max-[10%] mx-5 mt-5 md:absolute md:top-[20%] md:justify-end md:left-[38%]'>
                <img src={Brush} className='w-[10%] sm:w-max-[10%] h-[80px] object-contain justify-start' />
                <p className='text-black font-gilroy font-semibold md:text-16px sm:text-14px'>Hair Styling</p>
                <p className='text-black font-gilroy font-regular text-12 sm:text-10'>Professional Hair Stylists specializing in contemporary cuts, hair treatments, and personalized hair care.</p>
            </div>
            <div className=' sm:w-max-[10%] mx-5 mt-5 md:absolute md:top-[48%] md:left-[5%]'>
                <img src={ScissorImage} className='w-[30%] sm:w-max-[10%] h-auto object-contain justify-start' />
                <p className='text-black font-gilroy font-semibold md:text-16px sm:text-14px'>Hair Cut</p>
                <p className='text-black font-gilroy font-regular text-12 sm:text-10 md:w-[60%] '>Skilled hair stylists offering precision cuts tailored to enhance individual style and personality.</p>
            </div>
            <div className='flex justify-end relative top-10 md:right-5'>
                <img src={HeroImage} className='w-full sm:max-w-[30%] h-auto' />
            </div>
        </div>
    )
}

export default HeroSection