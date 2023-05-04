//don't need to import react from react
// import { useState } from 'react'

// external imports
import { BrowserRouter, Routes, Route } from 'react-router-dom'


// internal imports

import routes from './config/routes'
import Navbar from './components/Navbar'

function App() {

  return (
  <BrowserRouter>
  <Navbar />
    <Routes>
      { routes.map((route: any, index: any) => (
        <Route
          key={index}
          path={route.path}
          element={
            <route.component />
          }
          />
      )) }
    </Routes>
  </BrowserRouter>
  )
}

export default App
