import { useState } from 'react'
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'
import Container from './components/Container'
import ExecuteFunction from './components/ExecuteFunction'
import Message from './components/Message'

import Teste1 from './components/Teste1'



import './App.css'

import City from "./assets/city.jpg"
import ChangeMessageState from './components/ChangeMessageState'




function App() {
  const [count, setCount] = useState(0)

  const firstName = "Marcio"
  const [lastName] = useState("Junior")

  const veiculos = [
    {id: 1, brand: "VW", km: 100000, color: "Azul", newCar: false},
    {id: 2, brand: "Ford", km: 0, color: "Vermelho", newCar: true},
    {id: 3, brand: "GM", km: 58000, color: "Branco", newCar: false}
  ]

  const showMessage = () => console.log("Evento do componente pai!")

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  return (
    <>
      <h1>Avançando em React.JS</h1>

      {/*Imagem na pasta Public*/}
      <div>
        <img src="/img1.jpg" alt="Paisagem de campo" />
      </div>

      {/*Imagem em asset*/}
      <div>
        <img src={City} alt="Paisagem de Cidade" />
      </div>

      {/* State */}
      <ManageData/>

      {/* Renderização de lista */}
      <ListRender/>

      {/* Renderização condicional */}
      <ConditionalRender/>

      {/* props */}
      <ShowUserName name= {firstName} lastName= {lastName}/>
      
      {/* Destructuring e reaproveitamento de componente */}
      {/*<CarDetails brand= "VW" km={100000} color="Azul" newCar={false}/>
      <CarDetails brand= "Ford" km={0} color="Vermelho" newCar={true}/>
      <CarDetails brand= "Fiat" km={58000} color="Branco" newCar={false}/>*/}

      {/* Loop em array de objetos */}
      {veiculos.map(veiculo => 
        <CarDetails key={veiculo.id} brand={veiculo.brand}  km={veiculo.km} color={veiculo.color} newCar={veiculo.newCar}/>
      )}

      {/* Children */}
      <Container myValue="Testing">
        <p>E este é o conteúdo</p>
      </Container>

      <Container myValue="Testing2">
        <h5>Este é outro container</h5>
      </Container>

      {/* Passando função em prop */}
      <ExecuteFunction myFunction={showMessage}/>

      {/* State Lift */}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>

      <Teste1/>
    </>
  )
}

export default App
