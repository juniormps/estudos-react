import React from 'react'

function EditButton({product, setName, setPrice, setEditingId}) {

    const handleEdit = (product) => {
        setName(product.name)
        setPrice(product.price)
        setEditingId(product.id)
    }

  return (

    <button className='buttonDefault' onClick={() => handleEdit(product)}>Editar</button>

  )
}

export default EditButton