import './App.css'
import { useState, useEffect } from 'react'

const url = "http://localhost:3000/products"

function App() {
  const [products, setProducts] = useState([])
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  //1 - resgatando dados (GET)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url)
        const data = await res.json()
        setProducts(data)
      } catch (error) {
        console.error(`Erro ao buscar dados: ${error}`)
      }
    }

    fetchData()
  }, [])

  //2 - Adicionando produtos (POST)
  const handlesubmit = async (e) => {
    e.preventDefault()

    const product = {
      name,
      price,
    }  //Obs.: o ID é criado automaticamente, não precisa ser inserido.

    try {
      const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    })
      const addedProduct = await res.json()
      
      setProducts((prevProducts) => [...prevProducts, addedProduct])

    } catch (error) {
       console.error(`Erro ao cadastrar o produto: ${error}`)
    }

    setName("")
    setPrice("")
  }

  return (
    <>
      <div className="App">
        <h1>Lista de Produtos</h1>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} - R$ {product.price}
            </li>
          ))}
        </ul>

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

            <input type="submit" value="Criar" />
          </form>
        </div>
      </div>
    </>
  )
}

export default App
