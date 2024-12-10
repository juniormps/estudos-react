import React from 'react'

const Challenge = () => {
    const number1 = 10
    const number2 = 8

    const handleMyEvent = () => {
        const sum = number1 + number2
        return console.log(sum)
    }

  return (
    <>
        <div>
            Os valores digitados são: {number1} e {number2}
        </div>
        <div>
            <button onClick={handleMyEvent}>Clique para somar os valores</button>
        </div>
    </>
  )
}

export default Challenge