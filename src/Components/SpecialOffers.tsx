import React from 'react'
import SpecialOffersImage from '../assets/Images/SpecialOffersImage.png'

function SpecialOffers() {
    return (
        <div id='special-offer'>
            <p className='text-primary text-[38px] font-gilroy text-center mt-5 font-bold'>Special Offers</p>
            <div className='md:flex md:flex-row sm:flex-col items-center justify-between border-1 bg-border md:w-[70%] mx-5 justify-self-center rounded-[40px] p-10 mb-5 mt-10 px-10'>
                <div className='bg-red-300 md:w-[35%]'>
                    <img src={SpecialOffersImage} className='sm:w-max-full h-auto object-contain' />
                </div>
                <div className='md:w-[60%]'>
                    <p className='md:text-[64px] text-[30px] text-black font-bold font-gilroy'>Flat 30% Off</p>
                    <ul className="list-disc space-y-2 text-black md:text-[28px] sm:text-[18px] font-gilroy">
                        <li>30% Off on Hair Coloring – Get a 
                        fresh new look!</li>
                        <li>Free Haircut with Any Hair Treatment!</li>
                        <li>Exclusive Bridal Package – 15% Off for 
                        Your Big Day!</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SpecialOffers