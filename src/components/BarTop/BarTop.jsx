import React, { useState } from 'react'
import { Link } from "react-router-dom"
import styles from "./BarTop.module.css"

import logo from "./../../img/mercedes-logo.png"
import login from "./../../img/person-outline.svg"

const navigation = [
  { component: "/", name: "Home" },
  { component: "/privacidade", name: "PolPriv" }
]

const BarTop = () => {

  const [width, setWidth] = useState(200);

  const handleFocus = () => {
    setWidth(500);
  };

  const handleBlur = () => {
    setWidth(250);
  };

  return (
    <div className={styles.BarTop}>
      <div className={styles.logoLink}>
        <img className={styles.logo} src={logo} alt="Logo da Mercedes" />
        <Link to={"/"}><p>Mercedes-Benz</p></Link>
      </div>
      <div className={styles.inputLogin}>
        <Link to={"/privacidade"}><p>Política de Privacidade/Provedor</p></Link>
        <input style={{ width: `${width}px` }} onFocus={handleFocus} onBlur={handleBlur} placeholder='Pesquisar' type="text" />
        <img className={styles.login} src={login} alt="Login/Cadastro" />
      </div>
    </div>
  )
}

export default BarTop