import './App.css'
import MyComponent from './components/MyComponent'

function App() {

  const n = 15

  const redTitle = true

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

      {/* CSS inline dinâmico */}
      <h2 style={n < 10 ? {color: "darkblue"} : {color: "green"}}>
        CSS inline dinâmico
      </h2>

      {/* Classe dinâmica */}
      <h2 className={redTitle ? "redTitle" : "title"}>
        Este título tem classe dinâmica
      </h2>
    </>
  )
}

export default App
