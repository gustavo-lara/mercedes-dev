import { Link } from "react-router-dom"
import styles from "./Header.module.css"

const navigation = [
  { component: "/", name: "Home" },
  { component: "/nossosmodelos", name: "NossosModelos" },
  { component: "/showroomonline", name: "ShowroomOn" },
  { component: "/guiadecompra", name: "GuiaDeCompra" },
  { component: "/pecasservicos", name: "PecasServicos" },
  { component: "/nossamarca", name: "NossaMarca" }
]

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse mt-2 mb-2" id="navbarNav">
          <ul className="navbar-nav gap-1" style={{ fontSize: '13px' }}>
            <li className="nav-item">
              <Link className="nav-link" to={"/"}>Página Inicial</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/nossosmodelos"}>Nossos Modelos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/showroomonline"}>Showroom Online</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/guiadecompra"}>Guia de Compra</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/pecasservicos"}>Peças e Serviços</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/nossamarca"}>Nossa Marca</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header