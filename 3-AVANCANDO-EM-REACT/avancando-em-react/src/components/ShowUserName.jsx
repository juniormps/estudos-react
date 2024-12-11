import React from 'react'

const ShowUserName = (props) => {
  return (
    <>
        <h2>O nome do usuário é: {props.name} {props.lastName}</h2>
    </>
  )
}

export default ShowUserName