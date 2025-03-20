import React from 'react'
import SpecialOffersImage from '../assets/Images/SpecialOffersImage.png'

function SpecialOffers() {
    return (
        <div id='special-offer'>
            <p className='text-primary text-[38px] font-gilroy-bold text-center mt-5 '>Special Offers</p>
            <div className='md:flex md:flex-row sm:flex-col items-center justify-between border-1 bg-border w-[80%] justify-self-center rounded-[40px] p-5 mb-5 mt-10'>
                <div>
                    <img src={SpecialOffersImage} className='w-[40%] sm:w-max-full h-auto object-contain' />
                </div>
            </div>
        </div>
    )
}

export default SpecialOffers