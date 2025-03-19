import React from 'react'
import HeroImage from '../assets/Images/HeroSectionImage.png'
import Brush from '../assets/Images/BrushImage.png'
import ScissorImage from '../assets/Images/ScissorImage.png'
import MakeupImage from '../assets/Images/MakeupImage.png'

function HeroSection() {
    return (
        <div className='md:flex md:flex-row sm:flex-col items-center justify-between'>
            <div className='flex flex-wrap md:w-[60%]'>
                <div className='md:flex sm:max-w-full sm:flex-col p-4 relative md:left-[55%]'>
                    <img src={Brush} className='w-[10%] sm:w-max-[10%] h-[80px] object-contain justify-start' />
                    <h3 className='text-black font-gilroy font-bold text-[18px]'>Hair Styling</h3>
                    <p className='text-black font-gilroy font-regular text-[12px] '>Professional Hair Stylists specializing in contemporary cuts, hair treatments, and personalized hair care.</p>
                </div>
                <div className='md:flex sm:max-w-full sm:flex-col p-4 '>
                    <img src={ScissorImage} className='w-[30%] sm:w-max-[10%] h-auto object-contain justify-start' />
                    <h3 className='text-black font-gilroy font-bold text-[18px]'>Hair Cut</h3>
                    <p className='text-black font-gilroy font-regular text-[12px] '>Skilled hair stylists offering precision cuts tailored to enhance individual style and personality.</p>
                </div>
                <div className='md:flex sm:max-w-full sm:flex-col p-4 relative md:left-[55%] sm:mb-5'>
                    <h3 className='text-black font-gilroy font-bold text-[18px]'>Make over</h3>
                    <p className='text-black font-gilroy font-regular text-[12px] '>Expert makeover artists with a passion for transforming looks through innovative hair styling, makeup, and wardrobe consultations.</p>
                    <img src={MakeupImage} className='w-[40%] sm:w-max-[10%] h-auto object-contain justify-start mt-5' />
                </div>
            </div>
            <div className='md:justify-items-end md:mr-[5%]'>
                <img src={HeroImage} className='md:w-[65%] object-contain' />
            </div>
        </div>
    )
}

export default HeroSection