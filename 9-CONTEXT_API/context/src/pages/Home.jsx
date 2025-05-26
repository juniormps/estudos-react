//import { useContext } from "react"
//import { CounterContext } from "../context/CounterContext"
import ChangeCounter from "../components/ChangeCounter"

//Refatorando com o Hook
import { useCounterContext } from "../hooks/useCounterContext"

//Hook de um context mais complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext"

const Home = () => {

    //Consumindo o contexto
    //const { counter } = useContext(CounterContext)

    //Consumindo o contexto com o Hook
    const { counter } = useCounterContext()

    //Consumo/Alteração do contexto mais complexo
    const { color, dispatch } = useTitleColorContext()

    //Alterando contexto complexo
    const setTitleColor = (color) => {
        dispatch({type: color})
    }

  return (

    <div>

        {/* Usando o contesto "color" aqui */}
        <h1 style={{ color: color}}>Home</h1>

        {/* Consumindo o contexto */}
        <p>Valor do contador: {counter} </p>

        {/* Alterando o contexto */}
        <ChangeCounter />

        {/* Alterando o contexto complexo */}
        <div>
            <button onClick={() => setTitleColor("RED")}>Vermelho</button>
            <button onClick={() => setTitleColor("BLUE")}>Azul</button>
        </div>

    </div>
    
  )
}

export default Home