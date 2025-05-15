import React from 'react'

const DeleteButton = ({product, del}) => {

    const handleRemove = async (id) => {

        try {
            await del(id)

        } catch (error) {
            console.error(`Falha ao deletar produto: ${error}`)
            
        }
    }

  return (
    <button className='buttonDefault' onClick={() => handleRemove(product.id)} >Excluir</button>
  )

}

export default DeleteButton