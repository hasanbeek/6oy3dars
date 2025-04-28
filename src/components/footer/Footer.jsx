import Header from "../header/Header"
import styles from "./Footer.module.css"
import instagram from "../../assets/images/instagram.svg";
import twitter from "../../assets/images/twitter.svg";
import facebook from "../../assets/images/facebook.svg"
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Header/>
      
    <div className="container" >
      <div className={styles.card}>
        <div>
          <p className={styles.desc}>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
          <p className={styles.desc}>Copyright 2021. All Rights Reserved</p>
        </div>
        <div className={styles.logos}>
           <img src={facebook} alt="" />
           <img src={twitter} alt="" />
           <img src={instagram} alt="" />
        </div>
      </div>
    </div>
    </footer>
  )
}
