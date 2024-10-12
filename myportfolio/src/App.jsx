import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './HciPortfolio/Home'
import Contact from './HciPortfolio/Contact'
import Project from './HciPortfolio/Project'
import Gallery from './HciPortfolio/Gallery'
import NbaStar from './HciPortfolio/NbaStar'
import SportsCar from './HciPortfolio/SportsCar'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
        <div className="main">
            <Routes>
              <Route index element={<Home />}></Route>
              <Route path="/Project" element={<Project /> } />
              <Route path="/Gallery" element={<Gallery /> } />
              <Route path="/Contact" element={<Contact /> } />
              <Route path="/NbaStar" element={<NbaStar /> } />
              <Route path="/SportsCar" element={<SportsCar /> } />
            </Routes>
        </div>
      </BrowserRouter>
      
    </>
  )
}

export default App
