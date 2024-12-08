//Trabalhando com eventos

import React from 'react'

const Events = () => {

    //Esta é uma função de evento
    const handleMyEvent= (e) => {
        console.log("Ativou o evento!")
        console.log(e)
    }

    //Esta é uma função de renderização
    const renderSomething = (x) => {
        if (x) {
            return <h3>Renderizando isso!</h3>
        } else {
            return <h3>Também posso renderizar isso!</h3>
        }
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
        <div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    </>
  )
}

export default Events