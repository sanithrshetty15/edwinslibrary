import Navbar from "./components/Navbar/Navbar"

import Hero from "./components/Hero/Hero"

import FeatureCarousel from "./components/FeatureCarousel/FeatureCarousel"

import StorySection from "./components/StorySection/StorySection"

import DashboardSection from "./components/DashboardSection/DashboardSection"

import AISection from "./components/AISection/AISection"

import QRSection from "./components/QRSection/QRSection"

import Testimonials from "./components/Testimonials/Testimonials"

import CTASection from "./components/CTASection/CTASection"

import Footer from "./components/Footer/Footer"

import SmoothScroll from "./components/SmoothScroll"

import CursorGlow from "./components/CursorGlow"

import ScrollProgress from "./components/ScrollProgress"

import MagneticButton from "./components/MagneticButton"

import Loader from "./components/Loader"

import LabShowcase from "./components/LabShowcase"

import LabSection from "./components/LabSection"
function App() {

  return (

    <main>
      <Loader />
      
      <ScrollProgress />

      <SmoothScroll /> 

      <MagneticButton />

      <CursorGlow />

      <Navbar />

      <Hero />

      <FeatureCarousel />

      <StorySection />

      <DashboardSection />

      {/* <LabShowcase /> */}

      <LabSection />

      <AISection />

      <QRSection />

      <Testimonials />

      <CTASection />

      <Footer />

    </main>
  )
}

export default App