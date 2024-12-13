import style from './CarDetails.module.css'

const CarDetails = ({model, brand, km, color, newCar, price}) => {

  return (
    <>
        <ul className={style.my_list} >
            <li>Modelo: {model} </li>
            <li>Marca: {brand} </li>
            <li>Quilometragem: {km} </li>
            <li>Cor: {color} </li>
            {newCar && <p>Veículo Zero Km</p>}
            <p>Preço: {price}</p>
        </ul>
    </>
  )
}

export default CarDetails