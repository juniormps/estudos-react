import './App.css'
import MyForm from './components/MyForm'

function App() {

  return (
    <>
      <h2>FORMULÁRIOS</h2>
      <MyForm user={{name: "Alda", email: "alda@gmail.com"}} />
    </>
  )
}

export default App
