import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Instagram from './INSTAGRAM'
import Login from './Login'
import { BrowserRouter, Route, Routes } from 'react-router'
import Signup from './Signup'
import LoggedIn from './loggedin'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Instagram />} >
        <Route path='/login' element={<Login />} /> 
        <Route path='/signup' element={<Signup/>} />
        <Route path='/loggedin' element={<LoggedIn/>} />
      </Route>
    </Routes>
   </BrowserRouter>
   </StrictMode>,
)
