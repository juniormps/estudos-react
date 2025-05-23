//Alterando o contexto
import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"

const ChangeCounter = () => {

    const {counter, setCounter} = useContext(CounterContext)

    const handleClick = () => setCounter(counter + 1)
    
  return (

    <div>
        <button onClick={() => handleClick()} >Aumentar</button>
    </div>

  )
}

export default ChangeCounter


//A função do evento onClick também pode ser escrita de forma inline.
//<button onClick={() => setCounter(counter + 1)} >Aumentar</button>