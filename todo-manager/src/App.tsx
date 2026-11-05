import { Routes,Route,Navigate } from 'react-router-dom'
import './App.css'
import Register from './components/auth/register'
import LoginForm from './components/auth/loginForm'


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/loginForm" />} />
        <Route path="/loginForm" element={<LoginForm />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App
