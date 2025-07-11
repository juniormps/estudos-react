//import { useContext } from "react"
//import { CounterContext } from "../context/CounterContext"
import ChangeCounter from "../components/ChangeCounter"

//Refatorando com o Hook
import { useCounterContext } from "../hooks/useCounterContext"

//Hook de um context mais complexo
import { useTitleStyleContext } from "../hooks/useTitleStyleContext"

const Home = () => {

    //Consumindo o contexto sem utilizar o hook
    //const { counter } = useContext(CounterContext)

    //Consumindo o contexto utilizando o Hook
    const { counter } = useCounterContext()

    //Consumo/Alteração do contexto mais complexo
    const { color, border, backgroundColor, fontSize, dispatch } = useTitleStyleContext()

    //Alterando contexto complexo
    const setStyleTitle = (styleTitle) => {
        dispatch({type: styleTitle})
    }

  return (

    <div>

        {/* Usando o contexto "color" aqui */}
        <h1 style={{ 
            color: color, 
            border: border, 
            backgroundColor: backgroundColor, 
            fontSize: fontSize
            }}>
                Home
        </h1>

        {/* Consumindo o contexto */}
        <p>Valor do contador: {counter} </p>

        {/* Alterando o contexto */}
        <ChangeCounter />

        {/* Alterando o contexto complexo */}
        <div>
            <p>Alterar cor e fundo do título</p>
            <button onClick={() => setStyleTitle("RED")}>Vermelho</button>
            <button onClick={() => setStyleTitle("BLUE")}>Azul</button>
            <button onClick={() => setStyleTitle("RESET_COLOR")}>Default</button>
        </div>

        <div>
            <p>Alterar o tamanho do título</p>
            <button onClick={() => setStyleTitle("GRANDE")}>Grande</button>
            <button onClick={() => setStyleTitle("EXTRAGRANDE")}>Extragrande</button>
            <button onClick={() => setStyleTitle("RESET_SIZE")}>Default</button>
        </div>

    </div>
    
  )
}

export default Home


/*
 OBSERVAÇÃO:
    No trecho de código abaixo não é necessário colocar os valores das propriedades, 
    já que as chaves e os valores têm o mesmo nome.

    <h1 style={{ 
        color: color, 
        border: border, 
        backgroundColor: backgroundColor, 
        fontSize: fontSize
        }}>
            Home
    </h1>

*/