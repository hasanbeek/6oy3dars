import Button from "../button/Button";
import styles from "./Product.module.css";

export default function Product(
  {
  special,
  title,
  description,
  isNew,
  img: { tablet, desktop, mobile },
})
{
  return (
    <div className="container">
      <div className={special? styles.specialProduct: styles.product}>
        <picture>
          <source media="(max-width:375px)" srcSet={mobile} />
          <source media="(max-width:768px)" srcSet={tablet} />
          <img src={desktop} alt={title} width={540} height={560} />
        </picture>
        <div className={styles.aboutes}>
          {isNew && <span className={styles.new}>NEW PRODUCT</span>}
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.desc}>{description}</p>
          <Button text="SEE PRODUCT" />
        </div>
      </div>
    </div>
  );
}
