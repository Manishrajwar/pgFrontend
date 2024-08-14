import React from 'react'
import Home from './Home'
import Homesec2 from "../components/Homesec2"
import Homesec3 from '../components/Homesec3'
import Homesec4 from './Homesec4'
import Homesec5 from '../components/Homesec5'
import Service from '../components/Service'
import ReadyGoBanner from '../components/ReadyGoBanner'
import WaterActivity from '../components/WaterActivity'
import FrequentQuestion from '../components/FrequentQuestion'
import BlogSection from '../components/BlogSection'
import Footer from '../Common/Footer'
import Footer2 from '../Common/Footer2'
import Testimonail from '../components/Testimonail'

function HomePage() {
  return (
    <div>

       <Home />
       
   <Homesec2 />

   <Homesec3 />

   <Homesec4 />

   <Homesec5 />

   <Service />

<ReadyGoBanner />

<Homesec5 />

<WaterActivity />

<Testimonail />

<FrequentQuestion />

<BlogSection />

<Footer />

<Footer2 />

    </div>
  )
}

export default HomePage