import { useContext } from "react";
import { CartContext } from "../../../store/CartContext";

export default function ProductItem({ styles, product }) {
  const cartCtx = useContext(CartContext);

  return (
    <li className="box-layout">
      <div className={`${styles.img} fadeIn`} style={{ backgroundImage: `url('/${product.image}')` }}></div>
      <div className={`${styles.productDetail} box-col`}>
        <p className={styles.productName}>                 
          <span>{product.name}</span>                 
          <em className={styles.soup}>  
            <i className="common-bg spicy"></i>
            <i className="common-bg spicy"></i>
          </em>             
        </p>             
        <p className={styles.price}>￥<i className={styles.priceNum}>{product.price}</i></p>         
      </div>         
      <div className={styles.toCart}>
        <i className={styles.add} onClick={() => { cartCtx.addItem(product) }}></i>
      </div>     
    </li>
  );
}