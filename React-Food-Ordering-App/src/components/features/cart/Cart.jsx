import { useState, useEffect, useContext } from "react";
import { CartContext } from "../../../store/CartContext";
import { useNavigate } from "react-router-dom";

import FixedBtm from "../../layouts/FixedBtm";
import CheckBtn from "../../UI/CheckBtn";
import AddItem from "../../UI/cart-item-controls/AddItemBtn";
import ReduceItem from "../../UI/cart-item-controls/ReduceItemBtn";
import { ItemControls, Amount } from "../../UI/cart-item-controls/ItemControls";

import styles from "./Cart.module.css";

export default function Cart() {
  const {items, totals, discount, addItem, removeItem} = useContext(CartContext);
  const [showItems, setShowItems] = useState(false);

  useEffect(() => {
    if (totals.totalItems === 0) {
      setShowItems(prevState => prevState ? !prevState : prevState);
    }
  }, [totals.totalItems]);

  const toggleCart = (event) => {
    event.stopPropagation();
    setShowItems(prevState => !prevState);
  }

  const navigate = useNavigate();

  const checkout = () => {
    navigate("cart/checkout");
  }

  return (
    totals.totalItems > 0 &&
    <>
      <div className={`cover ${showItems ? "" : "hide"}`} onClick={toggleCart}></div>

      <div className={styles.cartPlacehoder}></div>

      <FixedBtm>
        <div className={styles.miniCart}>
          <i className={styles.cartIcon} onClick={toggleCart}>
            <span className={styles.amount}>{totals.totalItems}</span>
          </i>

          <div className={styles.settle}>
            { (totals.totalPrice > discount && discount > 0) ?
              <>
                <span>￥{totals.discountPrice}</span>
                <span className={styles.discount}>(-￥<em>{discount}</em>)</span>
              </> :
              <span>{totals.totalPrice}</span>
            }
          </div>

          <CheckBtn action={checkout}>Checkout</CheckBtn>

          <div className={`${styles.meals} ${showItems ? "" : "hide"}`}>
              <ul>  
                {
                  totals.totalItems > 0 &&
                  items.map(item => (
                    <li key={item.id}>         
                      <div className={`${styles.name} single-line`}>
                        {item.name}
                      </div>         
                      <div className={styles.price}>
                        ￥{item.price}
                      </div>         
                      <ItemControls>
                        <ReduceItem onReduce={() => { removeItem(item.id) }} />
                        <Amount>{item.amount}</Amount>
                        <AddItem onAdd={() => { addItem(item) }} />
                      </ItemControls>     
                    </li> 
                  ))
                }   
              </ul>
          </div>
        </div>
      </FixedBtm>
    </>
  );
}