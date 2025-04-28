import styles from "./Header.module.css";
import logo from "../../assets/images/audiophileLogo.svg";
import shop from "../../assets/images/shopping.svg";
export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
      <div id={styles["header-container"]}>
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <ul className={styles["list-item"]}>
          <li><a className={styles["list-item-a"]} href="#">HOME</a></li>
          <li><a className={styles["list-item-a"]} href="#">HEADPHONES</a></li>
          <li><a className={styles["list-item-a"]} href="#">SPEAKERS</a></li>
          <li><a className={styles["list-item-a"]} href="#">EARPHONES</a></li>
        </ul>
        <img src={shop} alt="shopping img" width={24} height={20} />
      </div>
      <div className={styles.border}></div>
      </div>
      
    </header>
  );
}
