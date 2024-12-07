//Utilizando o JS dentro do JSX

import React from 'react'

const TemplateExpressions = () => {

    const name = "Marcio"
    const data = {
        age: 37,
        job: "Desenvolvedor de Software"
    }

  return (
    <>
        <h3>Olá {name}, tudo bem?</h3>
        <p>Você atua como: {data.job}</p>
        <p>{4 + 4}</p>
        <p>{console.log("JSX React")}</p>
    </>
  )
}

export default TemplateExpressions