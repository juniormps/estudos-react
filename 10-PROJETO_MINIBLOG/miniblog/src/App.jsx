import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

//Context
import { AuthProvider } from './context/AuthContext'

//Pages
import Home from './pages/home/Home'
import About from './pages/about/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './pages/login/Login'
import Register from './pages/register/Register'

function App() {
 

  return (
    <>
      <div>
        <AuthProvider>
            <BrowserRouter>

                <Navbar/>

                <div className="container">
                    <Routes>
                        <Route path='/' element={<Home/>} />
                        <Route path='/about' element={<About/>} />
                        <Route path='/login' element={<Login/>} />
                        <Route path='/register' element={<Register/>} />
                    </Routes>
                </div>

                <Footer/>
                
            </BrowserRouter>
        </AuthProvider>
      </div>
    </>
  )
}

export default App
