import { useState } from 'react'
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'


import './App.css'

import City from "./assets/city.jpg"
import CarDetails from './components/CarDetails'


function App() {
  const [count, setCount] = useState(0)

  const firstName = "Marcio"
  const [lastName] = useState("Junior")

  const veiculos = [
    {brand: "VW", km: 100000, color: "Azul", newCar: false},
    {brand: "Ford", km: 0, color: "Vermelho", newCar: true},
    {brand: "GM", km: 58000, color: "Branco", newCar: false}
  ]

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
      
      {/*<CarDetails brand= "VW" km={100000} color="Azul" newCar={false}/>
      <CarDetails brand= "Ford" km={0} color="Vermelho" newCar={true}/>
      <CarDetails brand= "Fiat" km={58000} color="Branco" newCar={false}/>*/}

      {veiculos.map(veiculo => 
        <CarDetails brand={veiculo.brand}  km={veiculo.km} color={veiculo.color} newCar={veiculo.newCar}/>
      )}
    </>
  )
}

export default App
