import React from 'react'
import styles from "./Footer.module.css"


const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.Conteudo}>
        <div className={styles.cont}>
          <p className={styles.titulo}>Serviços Online</p>
          <a href="">Encontre uma concessionária</a>
          <a href="">Seminovos Certified</a>
          <a href="">Configurações</a>
          <a href="">Tenho Interesse</a>
          <a href="">Consultar Recall</a>
          <a href="">Manuais do Proprietário</a>
        </div>
        <div className={styles.cont}>
          <p className={styles.titulo}>Sobre</p>
          <a href="">Sobre a Mercedes-Benz</a>
          <a href="">Informativo Semicondutores</a>
          <a href="">Fale conosco</a>
          <a href="">Carreira</a>
        </div>
      </div>
      <div className={styles.gustavoLara}>
        <p>Feito por <a href="https://linktr.ee/gustavo.lara">gustavo-lara</a></p>
      </div>
    </div>
  )
}

export default Footer