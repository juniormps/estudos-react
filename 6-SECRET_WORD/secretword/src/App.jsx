
import { useState } from 'react'
import './App.css'

function App() {

  const [words] = useState([
    {id:1, word: "automovel", tip: "estrada"},
    {id:2, word: "maça", tip: "fruta"},
    {id:3, word: "janela", tip: "casa"},
    {id:4, word: "caderno", tip: "escola"},
    {id:5, word: "mouse", tip: "computador"},
    {id:6, word: "baterista", tip: "musica"},
    {id:7, word: "crocodilo", tip: "pantano"},
    {id:8, word: "arvore", tip: "floresta"},
    {id:9, word: "bicicleta", tip: "pedal"},
    {id:10, word: "universidade", tip: "reitor"}
  ])

  return (
    <>
      <h1>Secret Word</h1>
      <p>Clique no botão abaixo para começar a jogar</p>
      <button>COMEÇAR A JOGAR</button>

    </>
  )
}

export default App
