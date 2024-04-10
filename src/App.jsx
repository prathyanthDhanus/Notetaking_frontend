import { useState } from 'react'
import Home from './Pages/Home'
import Register from './Pages/Register'
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import ViewNotes from './Pages/ViewNotes'


function App() {
 

  return (
    <>
    <Routes>
     <Route path='/' Component={Home} />
     <Route path='/register' Component={Register} />
     <Route path='/login' Component={Login} />
     <Route path='/view/notes' Component={ViewNotes} />
    </Routes>
      
    </>
  )
}

export default App
