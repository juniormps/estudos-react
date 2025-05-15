import React from 'react'

const PatchPriceButton = ({product, setEditingPrice, priceInputRef}) => {

    // Abre o modal de edição de preço
    const openPriceEditor = (id, currentPrice) => {
        setEditingPrice(id)

        // Usamos setTimeout para garantir que o DOM esteja atualizado
        setTimeout(() => {
            priceInputRef.current?.focus()
            priceInputRef.current?.select()
        }, 0)
    }

  return (

    <button className='buttonDefault' onClick={() => openPriceEditor(product.id, product.price)}>
        Atualizar Preço
    </button>

  )

}

export default PatchPriceButton