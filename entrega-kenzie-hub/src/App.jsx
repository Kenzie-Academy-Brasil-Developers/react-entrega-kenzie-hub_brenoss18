import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {Routes, Route, Link} from 'react-router-dom'
import DashBoard from './pages/dashboard/dashboard'
import RegisterPage from './pages/register/register'
import LoginPage from './pages/login/login'
import { DivApp } from './styled/styled'


function App() {
  const [user, setUser] = useState('')
  return (
    <DivApp className="App">
      <Routes>
        <Route path='/' element={<RegisterPage/>}/>
        <Route path='/dashboard' element={<DashBoard user={user}/>}/>
        <Route path='/login' element={<LoginPage setUser={setUser}/>} />
      </Routes>
    </DivApp>
  )
}

export default App
