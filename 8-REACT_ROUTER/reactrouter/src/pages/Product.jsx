import { Link, useParams } from "react-router-dom"
import { useApi } from "../hooks/useApi"

const Product = () => {
    const  { id } = useParams()

    //Carregamento de dado individual
    const url = 'http://localhost:3000/products/' + id  //NÃO pode esquecer da barra "/" depois do "products"
    const {data: product, loading, error} = useApi(url)

    console.log(product)

  return (

    <>
        <p>ID do produto: {id} </p>

        {error && <p>{error}</p> }

        {loading && <p>Carregando...</p>}

        {product && (
            <div>
                <h1>{product.name} </h1>
                <p>R$ {product.price} </p>

                {/* Nested Router */}
                <Link to={`/products/${product.id}/info`} >Mais informações</Link> 
            </div>
        )}
    </>

  )
}

export default Product