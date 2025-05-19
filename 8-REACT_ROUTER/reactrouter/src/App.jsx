import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Pages
import Home from "./pages/Home"
import About from "./pages/About"

//Components
import Navbar from './components/Navbar'

function App() {

  return (
    <>
        <div>
            <h1>React Router</h1> 
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />}  />
                </Routes>
            </BrowserRouter>
        </div>
    </>
  )
}

export default App


//Obs.:
//Elementos como o (h1), que estão fora do BrowseRouter, serão repetidos em todas as páginas.
