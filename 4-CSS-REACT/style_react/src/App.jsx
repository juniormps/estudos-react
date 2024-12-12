import './App.css'
import MyComponent from './components/MyComponent'

function App() {

  return (
    <>
      {/* CSS Global */}
      <h1>CSS com React.JS</h1>

      {/* CSS de componente */}
      <MyComponent/>

      <p>Este parágrafo é do App.jsx</p>

      {/* Inline CSS */}
      <p style={{backgroundColor: "green", color: "blue", padding:"25px", borderTop:"2px solid red"}}>
        Este elemento foi estilizado de forma inline
      </p>
    </>
  )
}

export default App
