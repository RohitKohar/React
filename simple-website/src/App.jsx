import React from 'react'
import Navbar from './components/Navbar'
import Body from './components/Body'
import Footer from './components/Footer'
import { Outlet } from 'react-router'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
