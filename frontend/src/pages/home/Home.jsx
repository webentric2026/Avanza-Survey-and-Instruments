import React from 'react'
import Hero from './Hero.jsx'
import Services from './Services.jsx'
import About from './About.jsx'
import IndustrySlider from './IndustrySlider.jsx'
import WhyChooseUs from './WhyChooseUs.jsx'
import EquipmentSection from './Equipments.jsx'

const Home = () => {
    return (
        <div>
            <Hero />
            <About />
            <Services />
            <IndustrySlider />
            <WhyChooseUs />
            <EquipmentSection />
        </div>
    )
}

export default Home