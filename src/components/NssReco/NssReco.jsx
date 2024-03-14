import React from 'react'
import styles from "./NssReco.module.css"
import CardNssReco from '../CardNssReco/CardNssReco'

const NssReco = () => {
    return (
        <div className={styles.body}>
            <div className={styles.title}>
                <h2>Nossas Recomendações</h2>
            </div>
            <div className={styles.cards}>
                <CardNssReco />
                <CardNssReco />
                <CardNssReco />
                <CardNssReco />
            </div>
        </div>

    )
}

export default NssReco