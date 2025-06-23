import { useSearchParams, Link } from "react-router-dom"
import { useApi } from "../hooks/useApi"


const Search = () => {
    const [searchParams] = useSearchParams()

    const url = "http://localhost:3000/products?" + searchParams  //NÂO pode esquecer do "?" após "products"

    const {data: items, loading, error} = useApi(url)

  return (

    <div>
        <h1>Resultados disponíveis:</h1>
        <ul className='products'>
            {items && items.map((item) => (
                <li key={item.id}>
                    <h2>{item.name}</h2>
                    <p>R$ {item.price}</p>
                    <Link to={`/products/${item.id}`}>Detalhes</Link>
                </li>
            ))}
        </ul>
    </div>

  )
}

export default Search





/*
OPÇÃO COM FILTRAGEM DA BUSCA NO LADO DO CLIENTE


const Search = () => {
    const [searchParams] = useSearchParams()
    const query = searchParams.get("q") // Obtém o valor do parâmetro "q"

    const url = "http://localhost:3000/products" // Remove a query da URL da API
    const { data: items, loading, error } = useApi(url)

    // Filtra os itens no lado do cliente se a API não filtrar
    const filteredItems = items?.filter(item => 
        item.name.toLowerCase().includes(query.toLowerCase())
    )

    return (
        <div>
            <h1>Resultados disponíveis:</h1>
            {loading && <p>Carregando...</p>}
            {error && <p>{error}</p>}
            <ul className='products'>
                {filteredItems && filteredItems.length > 0 ? (
                    filteredItems.map((item) => (
                        <li key={item.id}>
                            <h2>{item.name}</h2>
                            <p>R$ {item.price}</p>
                            <Link to={`/products/${item.id}`}>Detalhes</Link>
                        </li>
                    ))
                ) : (
                    <p>Nenhum resultado encontrado para "{query}"</p>
                )}
            </ul>
        </div>
    )
}

export default Search
*/