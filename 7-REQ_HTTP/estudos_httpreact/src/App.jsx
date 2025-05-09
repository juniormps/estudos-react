import './App.css'
import { useState } from 'react'
import { useApi } from './hooks/useApi'  //Custom Hook

const url = "http://localhost:3000/products"

function App() {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  const { data: items, httpConfig, loading, error } = useApi(url)


  //Adicionando produtos (POST)
  const handlesubmit = async (e) => {
    e.preventDefault()

    const product = {
      name,
      price,
    }  //Obs.: o ID é criado automaticamente, não precisa ser inserido.

    httpConfig(product, "POST")

    setName("")
    setPrice("")
  }

  //Deletando itens cadastrados (DELETE)
  const handleRemove = async (id) => {

    httpConfig(id, "DELETE")
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
                  {loading && <button className='delButton' disabled >Aguarde</button>}
                  {!loading && <button className='delButton' onClick={() => handleRemove(product.id)} >Excluir</button>}
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
            {!loading && <input type="submit" value="Criar" />}
          </form>
        </div>
      </div>
    </>
  )
}

export default App