import { useState } from 'react'
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'
import Container from './components/Container'


import './App.css'

import City from "./assets/city.jpg"


function App() {
  const [count, setCount] = useState(0)

  const firstName = "Marcio"
  const [lastName] = useState("Junior")

  const veiculos = [
    {id: 1, brand: "VW", km: 100000, color: "Azul", newCar: false},
    {id: 2, brand: "Ford", km: 0, color: "Vermelho", newCar: true},
    {id: 3, brand: "GM", km: 58000, color: "Branco", newCar: false}
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

      <Container myValue="Testing">
        <p>E este é o conteúdo</p>
      </Container>

      <Container myValue="Testing2">
        <h5>Este é outro container</h5>
      </Container>
    </>
  )
}

export default App
