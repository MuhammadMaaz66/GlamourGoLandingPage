import React from 'react'
import AboutUsFirstVector from '../assets/Images/AboutUsVectorFirst.png'
import BestSpecialistVector from '../assets/Images/BestSpecialistVector.png'
import SpecialOffersVector from '../assets/Images/SpecialOffersVector.png'

function AboutUs() {
    return (
        <div>
            <p className='text-primary text-[38px] font-gilroy-bold text-center mt-5 font-bold'>About Us</p>
            <div className='flex flex-col md:flex-row w-[70%] mx-auto items-baseline'>
                <div className='flex flex-col items-center text-center md:w-1/3 sm:w-full p-4'>
                    <img src={AboutUsFirstVector} className='w-[65%] sm:w-max-full h-auto object-contain justify-self-center' />
                    <h3 className='text-black font-gilroy font-bold text-[24px]'>Select Category</h3>
                    <p className='text-black font-gilroy font-regular text-[12px] justify-self-center'>Explore a diverse range of beauty and grooming services tailored to your unique style. From hair styling to makeup, find the perfect category to suit your needs.</p>
                </div>
                <div className='flex flex-col items-center text-center md:w-1/3 sm:w-full p-4 '>
                    <img src={BestSpecialistVector} className='w-[65%] sm:w-max-full h-auto object-contain justify-self-center' />
                    <h3 className='text-black font-gilroy font-bold text-[24px]'>Best Specialist</h3>
                    <p className='text-black font-gilroy font-regular text-[12px]  justify-self-center'>Our team of highly skilled specialists brings years of expertise to deliver exceptional beauty services. Trust our professionals to bring your vision to life with precision and care.</p>
                </div>
                <div className='flex flex-col items-center text-center md:w-1/3 sm:w-full p-4 '>
                    <img src={SpecialOffersVector} className='w-[65%] sm:w-max-full h-auto object-contain justify-self-center' />
                    <h3 className='text-black font-gilroy font-bold text-[24px]'>Special Offers</h3>
                    <p className='text-black font-gilroy font-regular text-[12px] justify-self-center'>Enjoy exclusive deals on premium beauty treatments. Discover seasonal promotions and discounts designed to make your self-care routine even more rewarding.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs