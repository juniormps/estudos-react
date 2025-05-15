import React from 'react'

const ModalEditPrice = ({product, setEditingPrice, priceInputRef, patch}) => {

    // Confirma a atualização do preço
    const handlePriceUpdate = async (id) => {
        if (!priceInputRef.current) {
            console.error("Elemento de input não encontrado")
            return
        }

        const rawValue = priceInputRef.current.value
        if (!rawValue.trim()) {
            alert("Preço não pode estar vazio")
            return
        }

        const newPrice = Number(rawValue)
        if (isNaN(newPrice) || newPrice <= 0) {
            alert("Por favor, insira um preço válido")
            return
        }

        try {
            await patch(id, { price: newPrice })
            setEditingPrice(null)

        } catch (error) {
            console.error(`Falha ao atualizar preço: ${error}`)
        }
    }

  return (

    <>
        <div className="price-modal">
            <label>
                Novo Preço:
                <input
                    type="number"
                    defaultValue={product.price}
                    ref={priceInputRef}
                />
            </label>
            <div className="modal-actions">
                <button onClick={() => handlePriceUpdate(product.id)}>
                    Confirmar
                </button>
                <button onClick={() => setEditingPrice(null)}>
                    Cancelar
                </button>
            </div>
        </div>
    </>
  )
}

export default ModalEditPrice