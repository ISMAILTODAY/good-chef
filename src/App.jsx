import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Home from './component/Home/Home'
import NavigationBar from './component/NavigationBar/NavigationBar'
import Footer from './component/Footer/Footer'


function App() {


  return (
    <div className='main'>
      <NavigationBar></NavigationBar>
      <Outlet></Outlet>
      <Footer></Footer>


    </div>
  )
}

export default App
