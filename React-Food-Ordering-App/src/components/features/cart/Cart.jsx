import { useState, useEffect, useContext } from "react";
import { CartContext } from "../../../store/CartContext";
import { Link } from "react-router-dom";
import {useCartTotalItems, useCartTotalPrice} from "./hooks/useCartContext";

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const cartTotalItems = useCartTotalItems(cartCtx);
  const cartTotalPrice = useCartTotalPrice(cartCtx);
  
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    if (cartTotalItems === 0) {
      setShowCart(prevState => prevState ? !prevState : prevState);
    }
  }, [cartTotalItems]);

  const toggleCart = (event) => {
    event.stopPropagation();
    setShowCart(prevState => !prevState);
  }

  return (
    cartTotalItems > 0 &&
    <>
      <div className={`cover ${showCart ? "" : "hide"}`} onClick={toggleCart}></div>
      <div id="miniCart" className="box-layout center-v fixed-btm">
        <i id="cart" onClick={toggleCart}>
          <span id="amount">{cartTotalItems}</span>
        </i>
        <div id="settle" className="box-col">
          { cartTotalPrice > 500 ?
            <>
              <span id="pay">￥{((cartTotalPrice - 500) / 100).toFixed(2)}</span>
              <span id="dis">(-￥<em id="disNum">5.00</em>)</span>
            </> :
            <span id="pay">{(cartTotalPrice / 100).toFixed(2)}</span>
          }
        </div>
        <Link id="confirm" to="cart/checkout">Checkout</Link>
        <div id="orders" className={showCart ? "" : "hide"}>
          <div id="cartfoods">
            <ul className="cart-foodlist">  
              {
                cartTotalItems > 0 &&
                cartCtx.items.map(item => (
                  <li key={item.id} className="box-layout center-v">         
                    <div className="name single-line">{item.name}<div className="soup"></div></div>         
                    <div className="total box-col">￥<span>{item.price}</span></div>         
                    <div className="foodop">
                      <i className="reduce" onClick={() => { cartCtx.removeItem(item.id) }}></i>
                      <em>{item.amount}</em>
                      <i className="add" onClick={() => { cartCtx.addItem(item) }}></i>
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