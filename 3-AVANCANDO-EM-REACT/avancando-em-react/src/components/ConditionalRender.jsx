import React, { useState } from 'react'

const ConditionalRender = () => {
    const [x] = useState(true)
    const [y] = useState(false)

    const [name, setName] = useState("José")

  return (
    <>
        <div>
            <h2>If Simples</h2>
            {x && <p>Se x for verdadeiro, será exibido!</p>}
            {!y && <p>Ou se a variável for NÃO FALSA!</p>}
        </div>
        <div>
            <h2>If Ternário</h2>
            {name === "José" ? <p>Bem vindo, {name}</p> : <p>Usuário desconhecido</p>}
        </div>
        <button onClick={() => setName("Samuel")}>Clique para alterar o nome</button>
    </>
  )
}

export default ConditionalRender