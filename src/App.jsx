import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from "./components/Header/Header.jsx"
import Footer from "./components/Footer/Footer.jsx"
import BarTop from "./components/BarTop/BarTop.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BarTop/>
    <Header />
    <Outlet />
    <Footer />
</>
  )
}

export default App
