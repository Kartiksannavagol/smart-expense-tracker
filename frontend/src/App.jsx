import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import DashboardCards from "./components/DashboardCards"
import StatsSection from "./components/StatsSection";
import Features from "./components/Features"
import MonthlyCharts from "./components/MonthlyCharts"
import CTA from "./components/CTA"
import Footer from "./components/Footer"

function App(){

  return(

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <Navbar/>

      <Hero/>

      <Features />

      <StatsSection />

      <CTA />

      <Footer />

      

    </div>

  )

}

export default App