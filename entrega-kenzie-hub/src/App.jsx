import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {Routes, Route, Link} from 'react-router-dom'
import DashBoard from './pages/dashboard/dashboard'
import RegisterPage from './pages/register/register'
import LoginPage from './pages/login/login'
import { DivApp } from './styled/styled'


function App() {

  return (
    <DivApp className="App">
      <Routes>
        <Route path='/' element={<RegisterPage/>}/>
        <Route path='/dashboard' element={<DashBoard/>}/>
        <Route path='/login' element={<LoginPage/>}/>
      </Routes>
    </DivApp>
  )
}

export default App
