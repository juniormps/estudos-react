import './App.css'
import { useState } from 'react'
import { useApi } from './hooks/useApi'  //Custom Hook

const baseUrl = "http://localhost:3000/products"

function App() {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [editingId, setEditingId] = useState(null)

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

    //Deletando itens cadastrados (DELETE)
    const handleRemove = async (id) => {

        try {
            await del(id)

        } catch (error) {
            console.error(`Falha ao deletar produto: ${error}`)
            
        }
    }


    // Editando itens (PUT/PATCH)
    const handleEdit = (product) => {
        setName(product.name)
        setPrice(product.price)
        setEditingId(product.id)
    }


    // Atualização parcial com PATCH (exemplo separado)
    const handleUpdatePrice = async (id, newPrice) => {
        try {
            await patch(id, { price: newPrice })
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
                                {loading && <button disabled >Aguarde</button>}
                                {!loading && (
                                    <>
                                        <button onClick={() => handleEdit(product)}>Editar</button>

                                        <button onClick={() => handleRemove(product.id)} >Excluir</button>

                                        <button onClick={() => handleUpdatePrice(product.id, prompt("Novo preço:", product.price))}>
                                            Atualizar Preço
                                        </button>
                                    </>
                                )}
                            </span>
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

                    {loading && <input type="submit" disabled value="Aguarde" />}
                    {!loading && (<input type="submit" value={editingId ? "Atualizar" : "Criar"} />)}

                    {editingId && (
                        <button type="button" onClick={() => {
                            setEditingId(null)
                            setName("")
                            setPrice("")
                            }}>
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


