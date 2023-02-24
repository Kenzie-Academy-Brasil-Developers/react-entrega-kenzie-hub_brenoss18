import { useState } from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import DashBoard from './pages/dashboard/dashboard'
import RegisterPage from './pages/register/register'
import LoginPage from './pages/login/login'
import  GlobalStyle, {DivApp}  from './styled/globalStyled'
import ProtectedRoutes from './pages/protectedRoutes/protectRoutes'



function App() {
  
  return (
    
    <>
    <GlobalStyle/>
    
    <DivApp className="App">
      <Routes>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/dashboard' element={<ProtectedRoutes/>}>
          <Route index element={<DashBoard/>}/>
        </Route>
        <Route path='/' element={<LoginPage/>} />
      </Routes>
    </DivApp>

    </>
    
  )
}

export default App
