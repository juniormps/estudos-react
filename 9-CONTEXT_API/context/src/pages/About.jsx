import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"

const About = () => {

    //Consumindo o contexto
    const { counter } = useContext(CounterContext)

  return (

    <div>
        {/* Consumindo o contexto */}
        <p>Valor do contador: {counter} </p>
    </div>
    
  )
}

export default About