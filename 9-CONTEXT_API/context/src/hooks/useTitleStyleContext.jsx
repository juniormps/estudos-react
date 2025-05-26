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