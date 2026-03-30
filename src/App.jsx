
import { Suspense } from 'react'
import './App.css'
import DashboardCard from './assets/Components/DashboardCard/DashboardCard'
import CallToAction from './assets/Components/FooterSection/CallToAction'
import Footer from './assets/Components/FooterSection/Footer'
import GetStarted from './assets/Components/GetStarted/GetStarted'
import InforCard from './assets/Components/InfoCard/InforCard'
import Navbar from './assets/Components/NavBar/Navbar'
import PricingCard from './assets/Components/PricingCard/PricingCard'
import AvailableProd from './assets/Components/ProductSection/AvailableProd'
import ProductSection from './assets/Components/ProductSection/ProductSection'

const fetchProducts = async () => {
  const res = await fetch('/data.json')
  return res.json()
}

function App() {

  const playerPromise  = fetchProducts();
  

  return (
    <>
    <Navbar></Navbar>
    <DashboardCard></DashboardCard>
    <InforCard></InforCard>
    <ProductSection></ProductSection>
    <Suspense><AvailableProd playerPromise={playerPromise}></AvailableProd></Suspense>
    
    <GetStarted></GetStarted>
    <PricingCard></PricingCard>
    <CallToAction></CallToAction>
    <Footer></Footer>
      
    </>
  )
}

export default App
