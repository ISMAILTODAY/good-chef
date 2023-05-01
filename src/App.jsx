import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavigationBar from './component/NavigationBar/NavigationBar'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavigationBar></NavigationBar>
      <Outlet></Outlet>
    </>
  )
}

export default App
