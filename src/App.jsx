import { useState } from 'react'
import { Routes , Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Login from "./pages/login/Login"
import Signup from "./pages/signup/Signup"
import Home from './pages/home/Home'
import Terms from './pages/terms_and_conditions/Terms'
import Privacy from './pages/privacy/Privacy'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/terms and conditions' element={<Terms />} />
      <Route path='/privacy policy' element={<Privacy />} />
    </Routes>
    <Footer />
    <Routes>
      <Route path='/hi' element={<Terms />}/>
    </Routes>

      
      
   </>
  )
}

export default App
