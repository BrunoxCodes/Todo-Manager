import { Route, Routes } from 'react-router-dom'
import './App.css'
import Register from './components/auth/register'
import LoginForm from './components/auth/loginForm'
import Dashboard from './components/dashboard'
// import Children from './components/children'


function App() {
  // const numbers = [1,2,3]
  // const newNumbers = [...numbers,4,5,6,7]

  // console.log(newNumbers);
  
  return (
    <div className='w-full h-screen flex justify-evenly items-center max-lg:w-full max-lg:h-screen max-md:w-full max-md:h-screen'>
      <Routes>
        <Route path='/' element={<LoginForm />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/loginForm' element={<LoginForm />}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </div>
  )
}

export default App
