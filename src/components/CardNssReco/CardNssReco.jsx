import React from 'react'
import styles from "./CardNssReco.module.css"

const CardNssReco = ({img, h2, p}) => {
  return (
    <div className={styles.body}>
      <img src={img} alt="" />
      <div className={styles.Cont}>
        <p>{p}</p>
        <h2>{h2}</h2>
        <button>Modelos Disponíveis</button>
      </div>
    </div>
  )
}

export default CardNssReco