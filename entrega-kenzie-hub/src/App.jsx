import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {Routes, Route, Link} from 'react-router-dom'
import DashBoard from './pages/dashboard/dashboard'
import RegisterPage from './pages/register/register'
import LoginPage from './pages/login/login'
import  GlobalStyle, {DivApp}  from './styled/globalStyled'



function App() {
  const [user, setUser] = useState('')
  return (
    
    <>
    <GlobalStyle/>
    
    <DivApp className="App">
      <Routes>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/dashboard' element={<DashBoard user={user}/>}/>
        <Route path='/' element={<LoginPage setUser={setUser}/>} />
      </Routes>
    </DivApp>

    </>
    
  )
}

export default App
