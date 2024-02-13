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
    <div className={styles.Header}>
      <div className={styles.links}>
        <Link to={"/"}><p>Página Inicial</p></Link>
        <Link to={"/nossosmodelos"}><p>Nossos Modelos</p></Link>
        <Link to={"/showroomonline"}><p>Showroom Online</p></Link>
        <Link to={"/guiadecompra"}><p>Guia de Compra</p></Link>
        <Link to={"/pecasservicos"}><p>Peças e Servicos</p></Link>
        <Link to={"/nossamarca"}><p>Nossa Marca</p></Link>
      </div>
      <div className={styles.bloco}></div>
    </div>
  )
}

export default Header