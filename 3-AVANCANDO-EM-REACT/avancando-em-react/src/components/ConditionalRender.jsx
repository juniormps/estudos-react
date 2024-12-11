import React, { useState } from 'react'

const ConditionalRender = () => {
    const [x] = useState(true)
    const [y] = useState(false)

  return (
    <div>
        <h2>Isso será exibido?</h2>
        {x && <p>Se x for verdadeiro, será exibido!</p>}
        {!y && <p>Ou se a variável for NÃO FALSA!</p>}
    </div>
  )
}

export default ConditionalRender