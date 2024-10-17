import styles from "./Home.module.css"
import videojs from "video.js"
// import imgInicio from "./../../img/mercedesInicio.jpg"
import NssReco from "../../components/NssReco/NssReco"
import videoInicio from "./../../videos/VideoInicio.mp4"

export const Home = () => {
  return (
    <div className={styles.Home}>
      <div className={styles.TelaInicio}>
        {/* <img src={imgInicio} alt="Imagem de uma Mercedes" /> */}
        <video autoPlay loop muted>
          <source src={videoInicio} type="video/mp4" />
        </video>
      </div>
      <NssReco />
    </div>
  )
}

export default Home