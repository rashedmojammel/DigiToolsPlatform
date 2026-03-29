
import './App.css'
import DashboardCard from './assets/Components/DashboardCard/DashboardCard'
import GetStarted from './assets/Components/GetStarted/GetStarted'
import InforCard from './assets/Components/InfoCard/InforCard'
import Navbar from './assets/Components/NavBar/Navbar'
import PricingCard from './assets/Components/PricingCard/PricingCard'

function App() {
  

  return (
    <>
    <Navbar></Navbar>
    <DashboardCard></DashboardCard>
    <InforCard></InforCard>
    <GetStarted></GetStarted>
    <PricingCard></PricingCard>
      
    </>
  )
}

export default App
