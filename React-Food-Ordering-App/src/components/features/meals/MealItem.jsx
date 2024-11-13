import { useContext } from "react";
import { CartContext } from "../../../store/CartContext";

import styles from "./Meals.module.css";
import AddItem from "../../UI/cart-item-controls/AddItemBtn";

export default function MealItem({ item }) {
  const cartCtx = useContext(CartContext);

  const addItem = () => {
    cartCtx.addItem(item);
  };

  return (
    <li>
      <div
        className={`${styles.img} fadeIn`}
        style={{ backgroundImage: `url(${item.image})` }}
      />

      <div className={styles.detail}>
        <div className={styles.name}>{item.name}</div>
        <div className={styles.spicy}>
          <i></i>
          <i></i>
        </div>
        <div className={styles.price}>￥{item.price}</div>
      </div>

      <AddItem onAdd={addItem} />
    </li>
  );
}