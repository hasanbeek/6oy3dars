import styles from"./BestAudioGear.module.css";
import bestgear from "../../assets/images/Bitmap.png"
import bestgearTablet from "../../assets/images/Bitmap-tablet.png"
import bestgearPhone from "../../assets/images/Bitmap-phone.png"

export default function BestAudioGear() {
  return (
    <section className="container">
      <div className={styles.card}>
        <div>
          <h2  className={styles.title}>Bringing you the <span className={styles.titlemark}>best</span> audio gear</h2>
          <p className={styles.desc}>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <picture>
          <source media="(max-width:375px)" srcSet={bestgearPhone}/>
          <source media="(max-width:768px)" srcSet={bestgearTablet}/>
        <img src={bestgear} alt="Beast gear img" />
        </picture>
       
      </div>
    </section>
  );
}
