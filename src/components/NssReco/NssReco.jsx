import React from 'react'
import styles from "./NssReco.module.css"
import CardNssReco from '../CardNssReco/CardNssReco'
import CarCad1 from './../../img/CarCard1.avif'
import CarCad2 from './../../img/CarCard2.avif'
import CarCad3 from './../../img/CarCard3.avif'



const NssReco = () => {
    return (
        <div className={styles.body}>
            <div className={styles.title}>
                <h2>Nossas Recomendações</h2>
            </div>
            <div className={styles.cards}>
                <div>
                    <CardNssReco img={CarCad1} h2="Condições exclusivas" p="Conheça o seu próximo Mercedes-Benz." />
                </div>
                <div>
                    <CardNssReco img={CarCad2} h2="Novo EQB" p="Elétrico. Feito pela Mercedes-Benz." />
                </div>
                <div>
                    <CardNssReco img={CarCad3} h2="Elétricos Mercedes-Benz" p="Conheça nossos modelos elétricos." />
                </div>
            </div>
        </div>

    )
}

export default NssReco