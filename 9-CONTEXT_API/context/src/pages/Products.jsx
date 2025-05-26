//import { useContext } from "react"
//import { CounterContext } from "../context/CounterContext"

//Refatorando com o Hook
import { useCounterContext } from "../hooks/useCounterContext"

//Hook de um context mais complexo
import { useTitleStyleContext } from "../hooks/useTitleStyleContext"


const Products = () => {

    //Consumindo o contexto
    //const { counter } = useContext(CounterContext)

    //Consumindo o contexto com o Hook
    const { counter } = useCounterContext()

    //Consumindo o contexto mais complexo
    const { color, border, backgroundColor, fontSize } = useTitleStyleContext()

  return (

    <div>
        {/* Usando o contesto "color" aqui */}
        <h1 style={{ 
            color: color, 
            border: border, 
            backgroundColor: backgroundColor, 
            fontSize: fontSize
            }}>
                Produtos
        </h1>

        {/* Consumindo o contexto */}
        <p>Valor do contador: {counter} </p>
    </div>
    
  )
}

export default Products