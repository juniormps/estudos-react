import './App.css'
import CarDetails from './components/CarDetails'

function App() {
  const veiculos = [
    {id: 1, model: "Golf", brand: "VW", km: 100000, color: "Azul", newCar: false, price: 51000},
    {id: 2, model: "Fiesta", brand: "Ford", km: 0, color: "Vermelho", newCar: true, price: 80500},
    {id: 3, model: "Corsa", brand: "GM", km: 58000, color: "Branco", newCar: false, price: 32000},
    {id: 4, model: "Punto", brand: "Fiat", km: 50700, color: "Grafite", newCar: false, price: 47500},
    {id: 5, model: "Logan", brand: "Renault", km: 0, color: "Branco", newCar: true, price: 96200}
  ]

  return (
    <>
      <h1>Veículos à Venda</h1>
      {veiculos.map(veiculo => 
        <CarDetails model={veiculo.model} brand={veiculo.brand} km={veiculo.km} color={veiculo.color} newCar={veiculo.newCar} price={veiculo.price} />
      )}
    </>
  )
}

export default App
