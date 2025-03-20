import React from 'react'
import SpecialistOne from '../assets/Images/SpecialistOne.png'
import SpecialistTwo from '../assets/Images/SpecialistTwo.png'

function Specialist() {
    return (
        <div id='specialist'>
            <p className='text-primary text-[38px] font-gilroy-bold text-center mt-5 font-bold'>Best Specialists</p>
            <div className='flex flex-col md:flex-row w-[70%] mx-auto items-baseline flex-wrap'>
                <div className='flex flex-col items-center text-center md:w-1/3 sm:w-full p-4'>
                    <img src={SpecialistOne} className='w-[65%] sm:w-max-full h-auto object-contain justify-self-center' />
                    <h3 className='text-black font-gilroy font-bold text-[24px]'>Eliza Brake</h3>
                    <p className='text-black font-gilroy font-regular text-[12px] justify-self-center'>Makeup Artist</p>
                </div>
                <div className='flex flex-col items-center text-center md:w-1/3 sm:w-full p-4 '>
                    <img src={SpecialistTwo} className='w-[65%] sm:w-max-full h-auto object-contain justify-self-center' />
                    <h3 className='text-black font-gilroy font-bold text-[24px]'>Cecilia Rayes</h3>
                    <p className='text-black font-gilroy font-regular text-[12px]  justify-self-center'>Hair Cut</p>
                </div>
                <div className='flex flex-col items-center text-center md:w-1/3 sm:w-full p-4 '>
                    <img src={SpecialistOne} className='w-[65%] sm:w-max-full h-auto object-contain justify-self-center' />
                    <h3 className='text-black font-gilroy font-bold text-[24px]'>Elizabeth Swan</h3>
                    <p className='text-black font-gilroy font-regular text-[12px] justify-self-center'>Barber</p>
                </div>
            </div>
        </div>
    )
}

export default Specialist