import { Link } from 'react-router-dom'
import { useApi } from '../hooks/useApi'
import './Home.css'


const Home = () => {
    const url = 'http://localhost:3000/products'

    const {data: items, loading, error} = useApi(url)

  return (

    <div>
        <h1>Produtos</h1>

        {error && <p>{error}</p> }

        <ul className='products'>
            {items && items.map((item) => (
                <li key={item.id}>
                    <h2>{item.name}</h2>
                    <p>R$ {item.price}</p>
                </li>
            ))}
        </ul>

    </div>

  )
}

export default Home