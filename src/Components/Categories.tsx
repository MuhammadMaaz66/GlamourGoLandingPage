import React from 'react'
import CategoriesImage from '../assets/Images/CategoriesImage.png'

function Categories() {
    return (
        <div className='mb-5' id='categories'>
            <p className='text-primary text-[38px] font-gilroy-bold text-center mt-5 font-bold'>Categories</p>
            <div className='md:flex md:flex-row sm:flex-col items-center justify-between'>
                <div>
                    <img src={CategoriesImage} className='w-[75%] sm:w-max-full h-auto object-contain justify-self-center' />
                </div>
                <div className='md:justify-items-start justify-items-center'>
                    <h3 className='text-black font-gilroy font-bold text-[24px] w-[70%]'>Explore a diverse range of beauty and grooming categories tailored to your unique style. From hair styling to makeup, find the perfect category to suit your needs.</h3>
                </div>
            </div>
        </div>
    )
}

export default Categories