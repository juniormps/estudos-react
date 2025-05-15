import './App.css'
import { useState, useRef } from 'react'
import { useApi } from './hooks/useApi'  //Custom Hook
import EditButton from './components/EditButton'
import DeleteButton from './components/DeleteButton'
import PriceModalButton from './components/PriceModalButton'
import ModalEditPrice from './components/ModalEditPrice'
import CancelEditButton from './components/CancelEditButton'

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

                                        <PriceModalButton product={product} setEditingPrice={setEditingPrice} priceInputRef={priceInputRef} />
                                    </>
                                )}
                            </span>

                            {editingPrice === product.id && (<ModalEditPrice product={product} setEditingPrice={setEditingPrice} priceInputRef={priceInputRef} patch={patch} />)}

                            
                            
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

                    {editingId && (<CancelEditButton setEditingId={setEditingId} setName={setName} setPrice={setPrice} /> )}

                </form>
            </div>
        </div>
    </>
  )
}

export default App

