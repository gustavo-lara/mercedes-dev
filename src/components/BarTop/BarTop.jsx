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
    setWidth(220);
  };

  const handleBlur = () => {
    setWidth(205);
  };


  return (
    <div className={styles.BarTop}>
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">

          <div class="modal-content">
            <div className={styles.ModalHeader}>
              <h7 class="" id="exampleModalLabel">Cadastre-se ou faça login aqui</h7>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className={styles.ModalBody}>
              <button className={styles.button}>
                <span className={styles.buttonContent}>Resgistro </span>
              </button>
              <button className={styles.button}>
                <span className={styles.buttonContent}>Login </span>
              </button>

              {/* <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.divMobile}></div>
      <div className={styles.logoLink}>
        <img className={styles.logo} src={logo} alt="Logo da Mercedes" />
        <Link to={"/"}><p>Mercedes-Benz</p></Link>
      </div>
      <div className={styles.inputLogin}>
        <Link to={"/privacidade"}><p>Política de Privacidade/Provedor</p></Link>
        <input style={{ width: `${width}px` }} onFocus={handleFocus} onBlur={handleBlur} placeholder='Pesquisar' type="text" />
        <img className={styles.login} data-bs-toggle="modal" data-bs-target="#exampleModal" src={login} alt="Login/Cadastro" />
      </div>
    </div>
  )
}

export default BarTop