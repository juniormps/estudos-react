//Criando um contexto

import { createContext, useState } from "react"

export const CounterContext = createContext()



//Criando o Provider

export const CounterContextProvider = ({children}) => {

    const [counter, setCounter] = useState(5)

  return (

    <CounterContext.Provider value={{ counter, setCounter }}>
        {children}
    </CounterContext.Provider>
    
  )
}