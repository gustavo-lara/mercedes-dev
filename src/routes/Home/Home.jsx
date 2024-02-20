import styles from "./Home.module.css"
import videojs from "video.js"
import imgInicio from "./../../img/mercedesInicio.jpg"

export const Home = () => {
  return (
    <div className={styles.Home}>
      <div className={styles.imgInicio}>
        <img src={imgInicio} alt="Imagem de uma Mercedes" />
        <div className={styles.cont}>
        <p>A potência que pulsa</p>
        <button>Saiba Mais</button>
        </div>
      </div>
    </div>
  )
}

export default Home