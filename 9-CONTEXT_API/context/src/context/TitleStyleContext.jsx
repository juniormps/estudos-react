import { createContext, useReducer } from "react"

export const TitleStyleContext = createContext()

export const titleStyleReducer = (state, action) => {
    
    switch (action.type) {
        case "RED":
            return {...state, color: "red", border: "2px solid red", backgroundColor: "yellow"}
        
        case "BLUE": 
            return {...state, color: "blue", border: "2px solid blue", backgroundColor: "green"}

        case "RESET_COLOR": 
            return {...state, color: "purple", border: "none", backgroundColor: "transparent"}

        case "GRANDE": 
            return {...state, fontSize: "4.5em"}

        case "EXTRAGRANDE": 
            return {...state, fontSize: "6.5em"}

        case "RESET_SIZE": 
            return {...state, fontSize: "3.2em"}

        default:
            return state
    }
}


export const TitleStyleContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(titleStyleReducer, { 
        color: "purple", 
        border: "none", 
        backgroundColor: "transparent",
        fontSize: "3.2em"
    })

    console.log("Title style context: ", state)

  return (

    <TitleStyleContext.Provider value={{...state, dispatch}} >
        {children}
    </TitleStyleContext.Provider>
    
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

    const titleStyleReducer = (state, action) => {
    
        switch (action.type) {
            case "RED":
                return {...state, color: "red"}
            
            case "BLUE": 
                return {...state, color: "blue"}

            case "RESET_COLOR": 
                return {...state, color: "purple"}

            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(exemploReducer, { color: "purple" })

    onde:
        state - é um objeto que contém os estados atuais
        dispatch - é a função usada para disparar (enviar) ações
        exemploReducer - é a função que determina como o estado deve mudar
        { color: "purple" } - o valor inicial do estado

*/