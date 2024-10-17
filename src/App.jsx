import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle"
import "bootstrap/dist/js/bootstrap"
import Header from "./components/Header/Header.jsx"
import Footer from "./components/Footer/Footer.jsx"
import BarTop from "./components/BarTop/BarTop.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BarTop />
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
