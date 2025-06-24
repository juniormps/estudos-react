//Criação de um custom hook para a utilização do contexto
//Obs.: isto não é obrigatório, mas é uma boa prática.

import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"


export const useCounterContext = () => {

    const context = useContext(CounterContext)

    if (!context) {
        console.log("Contexto não encontrado")
    }

  return (

    context

  )
}