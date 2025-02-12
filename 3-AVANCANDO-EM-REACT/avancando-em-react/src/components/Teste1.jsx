import React from 'react'
import {useState} from 'react'


const Teste1 = () => {
    
    const [number, setNumber] = useState(15)

    const twiceNumber = () => setNumber((prevNumber) => prevNumber * 2)

    //------------------------------------------
    
    const [randomNumber, setRandomNumber] = useState(null)

    const sortNumber = () => {
      let newRandomNumber = Math.random() * 10
      setRandomNumber(newRandomNumber)
    }

    //-------------------------------------------

    const [finalNumber, setFinalNumber] = useState(null)

    const roundNumber = () => {
      setFinalNumber(Math.floor(randomNumber))
    }

    //--------------------------------------------

  return (
    <>
        <h2>Componente de Teste 1</h2>
        <div>
  
          <p>Valor: {number}</p>
          <button onClick={twiceNumber}>Mudar Variável Acima</button>
        </div>

        <div>
          <button onClick={sortNumber}>Sortear Número Aleatório</button>
          <p>Valor Sorteado: {randomNumber}</p>
        </div>

        <div>
          <button onClick={roundNumber}>Arredondar Número Sorteado</button>
          <p>Valor Sorteado Arredondado Para baixo: {finalNumber}</p>
        </div>

    </>
  )
}

export default Teste1