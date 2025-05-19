import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Components
import Navbar from './components/Navbar'

//Pages
import Home from "./pages/Home"
import About from "./pages/About"
import Product from "./pages/Product"
import Info from './pages/Info'
import NotFound from './pages/NotFound'

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
                    <Route path='/products/:id' element={<Product />} />
                    <Route path='/products/:id/info' element={<Info />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    </>
  )
}

export default App


//Obs.:

//Elementos como o (h1), que estão fora do BrowseRouter, serão repetidos em todas as páginas.

//quando é inserido o ":id" no path, a rota fica dinâmica.
