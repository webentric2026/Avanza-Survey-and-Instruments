import React from 'react'
import Hero from './Hero.jsx'
import Services from './Services.jsx'
import About from './About.jsx'
import IndustrySlider from './IndustrySlider.jsx'
import WhyChooseUs from './WhyChooseUs.jsx'
import EquipmentSection from './Equipments.jsx'
import SEO from '../../components/SEO.jsx'

const Home = () => {
    return (
        <div>
            <SEO
                path="/"
                description="Avanza Survey & Instruments — professional land survey, topographical survey, DGPS survey, drone survey, total station survey, GIS mapping and survey equipment rental in Delhi NCR and across India."
                keywords={[
                    "land surveyor in Delhi",
                    "surveying services Delhi",
                    "topographical survey",
                    "DGPS survey",
                    "drone survey services",
                    "total station survey",
                    "GIS mapping services",
                    "survey equipment rental Delhi",
                ]}
            />
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