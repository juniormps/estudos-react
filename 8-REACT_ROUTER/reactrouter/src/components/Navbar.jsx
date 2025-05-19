import "./Navbar.css"
import { Link, NavLink } from "react-router-dom"


const Navbar = () => {

  return (

    <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">Sobre</NavLink>
    </nav>

  )
}

export default Navbar

//O NavLink é melhor para ser utilizado em uma barra de navegação, pois oferece um recurso nativo para indicar qual link está ativo ou não.


//por default, o NavLink já seta true na propriedade "isActive" da página que está ativa. Sendo necessário apenas criar uma class no CSS, como o nome ".active", para adicionar os estilos desejados ao link ativo.


//Caso quera adicionar uma outra classe dinâmica ao link ativo ou não ativo, é só fazer da maneira abaixo (que é a maneira antiga).
//<NavLink to="/" className={({isActive}) => (isActive ? "esta-ativo" : "não-ativo")} >Home</NavLink>


/*
ABORDAGEM COM O "LINK" OU INVÉS DO "NAVLINK"

<nav>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about">Sobre</NavLink>
</nav>

*/