import styles from "./Home.module.css"
import videojs from "video.js"
import imgInicio from "./../../img/mercedesInicio.jpg"
import NssReco from "../../components/NssReco/NssReco"

export const Home = () => {
  return (
    <div className={styles.Home}>
      <div className={styles.imgInicio}>
        <img src={imgInicio} alt="Imagem de uma Mercedes" />
      </div>
      <NssReco />
    </div>
  )
}

export default Home