import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

//Components
import Navbar from './components/Navbar'

//Pages
import Home from "./pages/Home"
import About from "./pages/About"
import Product from "./pages/Product"
import Info from './pages/Info'
import NotFound from './pages/NotFound'
import SearchForm from './components/SearchForm'
import Search from './pages/Search'

function App() {

  return (
    <>
        <div>
            <h1>React Router</h1> 
            <BrowserRouter>
                <Navbar />

                {/* Search */}
                <SearchForm />
                
                <Routes>
                    <Route path='/' element={<Home />} />

                    <Route path='/about' element={<About />}  />

                    {/* Rota Dinâmica */}
                    <Route path='/products/:id' element={<Product />} />

                    {/* Nested Route */}
                    <Route path='/products/:id/info' element={<Info />} />

                    {/* Search Params */}
                    <Route path='/search' element={<Search />} />

                    {/* Redirect de Págias */}
                    <Route path='/company' element={<Navigate to="/about" />} />  

                    {/* No Match Route */}
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

//Nas versões mais antigas do Router, era necessário posicionar a rota dinâmica após o nested, pois caso contrário, apresentava erro.
