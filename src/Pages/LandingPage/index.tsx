import React from 'react'
import Header from '../../Components/Header'
import HeroSection from '../../Components/HeroSection'
import AboutUs from '../../Components/AboutUs'
import Categories from '../../Components/Categories'
import Specialist from '../../Components/Specialist'
import SpecialOffers from '../../Components/SpecialOffers'
import Footer from '../../Components/Footer'

function LandingPage() {
    return (
        <div>
            <Header />
            <HeroSection />
            <AboutUs />
            <Categories />
            <Specialist />
            <SpecialOffers />
            <Footer />
        </div>
    )
}

export default LandingPage