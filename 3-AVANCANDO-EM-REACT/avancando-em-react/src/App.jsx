import { useState } from 'react'
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'


import './App.css'

import City from "./assets/city.jpg"


function App() {
  const [count, setCount] = useState(0)

  const firstName = "Marcio"

  const [lastName] = useState("Junior")

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
      <ConditionalRender/>
      <ShowUserName name= {firstName} lastName= {lastName}/>
    </>
  )
}

export default App
