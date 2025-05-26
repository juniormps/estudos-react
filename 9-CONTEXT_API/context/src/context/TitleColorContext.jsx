import { createContext, useReducer } from "react"

export const TitleColorContext = createContext()

export const titleColorReducer = (state, action) => {
    
    switch (action.type) {
        case "RED":
            return {...state, color: "red"}
        
        case "BLUE": 
            return {...state, color: "blue"}

        default:
            return state
    }
}


export const TitleColorContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(titleColorReducer, { color: "purple" })

    console.log("Title color context: ", state)

  return (

    <TitleColorContext.Provider value={{...state, dispatch}} >
        {children}
    </TitleColorContext.Provider>
    
  )
}


/*
O "useReducer()" é um hook parecido com o "useState()".

Diferenças:

- O useState gerencia apenas um estado, enquanto o useReduce pode gerenciar vários.

Funcionamento:

- useState
    const [state, setState] = useState(x)

    onde:
        state - é o estado a ser monitorado
        setState - é a função que altera o estado monitorado
        x - é o valor inicial do estado

- useReducer
    const [state, dispatch] = useReducer(TitleColorReducer, { color: "purple" })

    onde:
        state - é um objeto que contém os estados a serem monitorados
        dispatch - é a função que altera os estados monitorados
        titleColorReducer - um exemplo de uma variável que representa um estado a ser monitorado
        { color: "purple" } - o valor inicial do estado monitorado (titleColorReducer)

*/