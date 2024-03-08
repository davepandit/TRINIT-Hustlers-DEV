import { useState } from 'react'
import { Routes , Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Login from "./pages/login/Login"
import Signup from "./pages/signup/Signup"

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
    </Routes>
    <Footer />

      
      
   </>
  )
}

export default App
