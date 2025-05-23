//import { useContext } from "react"
//import { CounterContext } from "../context/CounterContext"

//Refatorando com o Hook
import { useCounterContext } from "../hooks/useCounterContext"


const About = () => {

    //Consumindo o contexto
    //const { counter } = useContext(CounterContext)

    //Consumindo o contexto com o Hook
    const { counter } = useCounterContext()

  return (

    <div>
        {/* Consumindo o contexto */}
        <p>Valor do contador: {counter} </p>
    </div>
    
  )
}

export default About