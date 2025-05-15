import './App.css'
import { useState, useRef } from 'react'
import { useApi } from './hooks/useApi'  //Custom Hook
import EditButton from './components/EditButton'
import DeleteButton from './components/DeleteButton'

const baseUrl = "http://localhost:3000/products"

function App() {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [editingId, setEditingId] = useState(null)
    const [editingPrice, setEditingPrice] = useState(null)
    const priceInputRef = useRef(null)

    const { data: items, loading, error, get, post, put, patch, del } = useApi(baseUrl)


    //Adicionando produtos (POST)
    const handlesubmit = async (e) => {
        e.preventDefault()

        try {
            const product = { name, price }
            
            if (editingId) {
                // Se estiver editando, faz PUT (atualização completa)
                await put(editingId, product)
                setEditingId(null)
            } else {
                // Se não estiver editando, faz POST (criação)
                await post(product)
            }
            
            setName("")
            setPrice("")

        } catch (error) {
            console.error(`Falha ao criar/atualizar produto: ${error}`)
        }
    }
    


    //Cancelando edição
    const handleCancelEdit = () => {
        setEditingId(null)
        setName("")
        setPrice("")
    }



    // Atualização parcial com PATCH
        // Abre o modal de edição de preço
    const openPriceEditor = (id, currentPrice) => {
        setEditingPrice(id)
        // Usamos setTimeout para garantir que o DOM esteja atualizado
        setTimeout(() => {
            priceInputRef.current?.focus()
            priceInputRef.current?.select()
        }, 0)
    }

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
        <div className="App">
            <h1>Lista de Produtos</h1>

            {loading && <p>Carregando dados...</p> }

            {error && <p>{error}</p> }

            {!error && (
                <ul>
                    {items && items.map((product) => (
                        <li key={product.id}>
                            {product.name} - R$ {product.price} 
                            <span> 
                                {loading && <button className='buttonDefault' disabled >Aguarde</button>}
                                {!loading && (
                                    <>
                                        <EditButton product={product} setName={setName} setPrice={setPrice} setEditingId={setEditingId} />

                                        <DeleteButton product={product} del={del} />

                                        <button className='buttonDefault' onClick={() => openPriceEditor(product.id, product.price)}>
                                            Atualizar Preço
                                        </button>
                                    </>
                                )}
                            </span>
                            
                            {/* Modal de edição de preço */}
                            {editingPrice === product.id && (
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
                            )}
                        </li>
                    ))}
                </ul>
            )}

            <div className="add-product">
                <form onSubmit={handlesubmit}>

                    <label htmlFor="name">
                        Nome:
                        <input 
                            type="text"
                            name='name'
                            value={name}
                            onChange={(e) => setName(e.target.value)} 
                        />
                    </label>

                    <label htmlFor="price">
                        Preço:
                        <input 
                            type="number"
                            name='price'
                            value={price}
                            onChange={(e) => setPrice(e.target.value)} 
                        />
                    </label>

                    {loading && <input type="submit" className='buttonDefault' disabled value="Aguarde" />}
                    {!loading && (<input type="submit" className='buttonDefault' value={editingId ? "Atualizar" : "Criar"} />)}

                    {editingId && (
                        <button type="button" className='buttonDefault' onClick={() => handleCancelEdit()}>
                            Cancelar Edição
                        </button>
                    )}

                </form>
            </div>
        </div>
    </>
  )
}

export default App

