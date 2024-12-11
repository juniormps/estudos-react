import React from 'react'

const ChangeMessageState = ({handleMessage}) => {

    const messages = ["Oi", "Olá", "Bem Vindo!", "Tudo Bem?"]

  return (
    <>
        <button onClick={() => handleMessage(messages[0])}>1</button>
        <button onClick={() => handleMessage(messages[1])}>2</button>
        <button onClick={() => handleMessage(messages[2])}>3</button>
        <button onClick={() => handleMessage(messages[3])}>4</button>

    </>
  )
}

export default ChangeMessageState