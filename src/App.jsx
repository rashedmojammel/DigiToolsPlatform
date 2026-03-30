import { useState } from 'react'
import './App.css'
import DashboardCard from './assets/Components/DashboardCard/DashboardCard'
import CallToAction from './assets/Components/FooterSection/CallToAction'
import Footer from './assets/Components/FooterSection/Footer'
import GetStarted from './assets/Components/GetStarted/GetStarted'
import InforCard from './assets/Components/InfoCard/InforCard'
import Navbar from './assets/Components/NavBar/Navbar'
import PricingCard from './assets/Components/PricingCard/PricingCard'
import ProductSection from './assets/Components/ProductSection/ProductSection'
import { ToastContainer } from 'react-toastify'

function App() {
  const [cart, setCart] = useState([])

  return (
    <>
      <Navbar cart={cart} />
      <DashboardCard />
      <InforCard />
      <ProductSection cart={cart} setCart={setCart} />
      <GetStarted />
      <PricingCard />
      <CallToAction />
      <Footer />

      <ToastContainer />
    </>
  )
}

export default App