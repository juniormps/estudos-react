import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"
import ChangeCounter from "../components/ChangeCounter"

const Home = () => {

    //Consumindo o contexto
    const { counter } = useContext(CounterContext)

  return (

    <div>
        <h1>Home</h1>

        {/* Consumindo o contexto */}
        <p>Valor do contador: {counter} </p>

        {/* Alterando o contexto */}
        <ChangeCounter />
    </div>
    
  )
}

export default Home