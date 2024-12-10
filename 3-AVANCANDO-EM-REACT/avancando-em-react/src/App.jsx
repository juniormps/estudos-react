import { useState } from 'react'
import ManageData from './components/ManageData'

import './App.css'

import City from "./assets/city.jpg"
import ListRender from './components/ListRender'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Avançando em React.JS</h1>
      <div>
        {/*Imagem na pasta Public*/}
        <img src="/img1.jpg" alt="Paisagem de campo" />
      </div>
      <div>
        <img src={City} alt="Paisagem de Cidade" />
      </div>
      <ManageData/>
      <ListRender/>
    </>
  )
}

export default App
