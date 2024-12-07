//Trabalhando com eventos

import React from 'react'

const Events = () => {

    const handleMyEvent= (e) => {
        console.log("Ativou o evento!")
        console.log(e)
    }
  return (
    <>
        <div>
            <button onClick={handleMyEvent}>Clique Aqui!</button>
        </div>
        <div>
            <button onClick={() => console.log("Clicou!")}>Clique aqui também!</button>
            <button
                onClick={() => {
                    if (true) {
                        console.log("ISTO NÃO DEVE SER FEITO, POIS NÃO OBEDECE UMA BOA PRÁTICA!")
                    }
                }}
            >
                Terceiro Botão
            </button>
        </div>
    </>
  )
}

export default Events