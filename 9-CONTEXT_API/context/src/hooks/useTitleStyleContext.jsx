//Criação de um custom hook para a utilização do contexto
//Obs.: isto não é obrigatório, mas é uma boa prática.

import { useContext } from "react"
import { TitleStyleContext } from "../context/TitleStyleContext"


export const useTitleStyleContext = () => {

    const context = useContext(TitleStyleContext)

    if (!context) {
        console.log("Contexto não encontrado")
    }

  return (

    context

  )
}