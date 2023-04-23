import React from 'react'
import Home from './components/Home'
import Instructor from './components/Instructor'
import Module from './components/Module/Module'

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import Navbar from './components/Navbar'
import Top from './components/Top'
import Sidebar from './components/Sidebar'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Top />
        <div style={{
          display: 'flex',
          width: '100%',
        }}>
          <div style={{
            width: '10%',
            minHeight: '100vh',
          }}>
            <Sidebar />
          </div>

          <div style={{
            width: '90%',
            minHeight: '100vh',
          }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/instructor" element={<Instructor />} />
              <Route path="/module" element={<Module />} />
            </Routes>
          </div>
        </div>

      </BrowserRouter>
    </>
  )
}

export default App