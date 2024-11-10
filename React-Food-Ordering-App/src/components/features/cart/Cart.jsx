import { useState, useEffect, useContext } from "react";
import { CartContext } from "../../../store/CartContext";
import { Link } from "react-router-dom";

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

  return (
    totals.totalItems > 0 &&
    <>
      <div className={`cover ${showItems ? "" : "hide"}`} onClick={toggleCart}></div>

      <div className="cart-placehoder"></div>
      <div id="miniCart" className="box-layout center-v fixed-btm">
        <i id="cart" onClick={toggleCart}>
          <span id="amount">{totals.totalItems}</span>
        </i>
        <div id="settle" className="box-col">
          { (totals.totalPrice > discount && discount > 0) ?
            <>
              <span id="pay">￥{totals.discountPrice}</span>
              <span id="dis">(-￥<em id="disNum">{discount}</em>)</span>
            </> :
            <span id="pay">{totals.totalPrice}</span>
          }
        </div>
        <Link id="confirm" to="cart/checkout">Checkout</Link>
        <div id="orders" className={showItems ? "" : "hide"}>
          <div id="cartfoods">
            <ul className="cart-foodlist">  
              {
                totals.totalItems > 0 &&
                items.map(item => (
                  <li key={item.id} className="box-layout center-v">         
                    <div className="name single-line">{item.name}<div className="soup"></div></div>         
                    <div className="total box-col">￥<span>{item.price}</span></div>         
                    <div className="foodop">
                      <i className="reduce" onClick={() => { removeItem(item.id) }}></i>
                      <em>{item.amount}</em>
                      <i className="add" onClick={() => { addItem(item) }}></i>
                    </div>     
                  </li> 
                ))
              }   
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}