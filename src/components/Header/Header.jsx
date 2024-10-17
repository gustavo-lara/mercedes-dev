import { Link } from "react-router-dom";
import { useRef, useState } from "react";

const navigation = [
  { component: "/", name: "Página Inicial" },
  { component: "/nossosmodelos", name: "Nossos Modelos" },
  { component: "/showroomonline", name: "Showroom Online" },
  { component: "/guiadecompra", name: "Guia de Compra" },
  { component: "/pecasservicos", name: "Peças e Serviços" },
  { component: "/nossamarca", name: "Nossa Marca" }
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    if (navbarRef.current) {
      navbarRef.current.classList.toggle('show', !isOpen);
    }
  };

  const closeNavbar = () => {
    setIsOpen(false);
    if (navbarRef.current) {
      navbarRef.current.classList.remove('show');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar} // Chama a função de alternar
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse mt-2 mb-2 ${isOpen ? 'show' : ''}`} id="navbarNav" ref={navbarRef}>
          <ul className="navbar-nav gap-1" style={{ fontSize: '13px' }}>
            {navigation.map((navItem, index) => (
              <li className="nav-item" key={index}>
                <Link
                  className="nav-link"
                  to={navItem.component}
                  onClick={closeNavbar} // Fecha a navbar ao clicar em um link
                >
                  {navItem.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
