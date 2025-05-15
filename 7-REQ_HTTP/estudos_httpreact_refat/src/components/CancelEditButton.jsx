import React from 'react'

const CancelEditButton = ({setEditingId, setName, setPrice}) => {

    const handleCancelEdit = () => {
        setEditingId(null)
        setName("")
        setPrice("")
    }

  return (

    <button type="button" className='buttonDefault' onClick={() => handleCancelEdit()}>
        Cancelar Edição
    </button>

  )
}

export default CancelEditButton