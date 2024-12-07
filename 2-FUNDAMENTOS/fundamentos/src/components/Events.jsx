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
    </>
  )
}

export default Events