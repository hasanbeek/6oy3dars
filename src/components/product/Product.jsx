import Button from "../button/Button";
import "./Product.css";

export default function Product({ title, description, isNew, img }) {
  return (
    <div>
      <picture>
        {/* <source media="(max-didth:375px)" srcSet={tablet} />
        <source media="(max-width:768px)" srcSet={mobile} /> */}
        <img src={img} alt={title} width={540} height={560} />
      </picture>
      <div>
        {isNew && <span>NEW PRODUCT</span>}
        <h3>{title}</h3>
        <p>{description}</p>
        <Button text="See product" />
      </div>
    </div>
  );
}
