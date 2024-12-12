import React from 'react'

const UserDetails = ({name, age, profession}) => {
  return (
    <>
        <h2>Dados dos Usuário</h2>
        <ul>
            <li>nome: {name}</li>
            <li>Idade: {age}</li>
            <li>Profissão: {profession}</li>
        </ul>
        {age >= 18 ? <p>Habilitado a emitir CNH</p> : <p>NÃO habilitado a emitir CNH. Aguarde completar 18 anos.</p>}
    </>
  )
}

export default UserDetails