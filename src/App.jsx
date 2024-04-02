import { useState } from 'react'
import Home from './Pages/Home'
import Register from './Pages/Register'
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'


function App() {
 

  return (
    <>
    <Routes>
     <Route path='/' Component={Home} />
     <Route path='/register' Component={Register} />
     <Route path='/login' Component={Login} />
    </Routes>
      
    </>
  )
}

export default App
