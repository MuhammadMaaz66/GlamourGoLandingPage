import React from 'react'
import Header from '../../Components/Header'
import HeroSection from '../../Components/HeroSection'
import AboutUs from '../../Components/AboutUs'
import Categories from '../../Components/Categories'
import Specialist from '../../Components/Specialist'
import SpecialOffers from '../../Components/SpecialOffers'

function LandingPage() {
    return (
        <div>
            <Header />
            <HeroSection />
            <AboutUs />
            <Categories />
            <Specialist />
            <SpecialOffers />
        </div>
    )
}

export default LandingPage