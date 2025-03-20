import React from 'react'
import Header from '../../Components/Header'
import HeroSection from '../../Components/HeroSection'
import AboutUs from '../../Components/AboutUs'
import Categories from '../../Components/Categories'
import Specialist from '../../Components/Specialist'

function LandingPage() {
    return (
        <div>
            <Header />
            <HeroSection />
            <AboutUs />
            <Categories />
            <Specialist />
        </div>
    )
}

export default LandingPage