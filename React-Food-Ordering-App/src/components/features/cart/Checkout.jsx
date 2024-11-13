import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../../store/CartContext";
import Header from "../../layouts/Header";
import FixedBtm from "../../layouts/FixedBtm";
import CheckBtn from "../../UI/CheckBtn";
import styles from "./Checkout.module.css";
import AddItem from "../../UI/cart-item-controls/AddItemBtn";
import ReduceItem from "../../UI/cart-item-controls/ReduceItemBtn";
import { ItemControls, Amount } from "../../UI/cart-item-controls/ItemControls";

export default function Checkout() {
  const {items, totals, discount, removeItem, addItem} = useContext(CartContext);

  const navigate = useNavigate();
  const order = () => {
    navigate("/cart/checkout/order");
  }

  return (
    <>
      <Header title="确认订单" />

      <a href="" className={styles.nameAddr}>
        <div className={styles.name}>wux</div>
        <div className={styles.address}>收餐地址：中科大厦</div>
      </a>

      <div className={styles.phone}>
        下单手机号<span>12333164964</span>
        {/* <a className={styles.btn}>更换</a> */}
      </div>

      <div className={styles.meals}>
        <p className={styles.tit}>订单信息</p>
        <ul>
          {
            items.map(item => (
              <li key={item.id}>
                  <div className={styles.img} style={{ backgroundImage: `url('./${item.image}')` }}></div>
                  <div className={styles.info}>
                      <div className={styles.name}>{item.name}</div>
                      <div className={styles.price}>
                        ￥<span>{item.price}</span>
                        <i className={styles.type}>生</i>
                      </div>
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
              
      <div className={styles.orderDes}>
        <dl>
          <dt>配送时间</dt>
          <dd>
            2016/08/26--21:00前送达
            <select className={styles.select} name="timeSelect">
              <option value="0" data-id="1001667">
                2016/08/26--20:00前送达
              </option>
              <option value="1" data-id="1001666">
                2016/08/26--21:00前送达
              </option>
              <option value="2" data-id="1001665">
                2016/08/26--22:00前送达
              </option>
            </select>
          </dd>
        </dl>
        <dl>
          <dt>满减</dt>
          <dd className={styles.mj}>
            <span>-5</span>
          </dd>
        </dl>
        <dl className={styles.coupons}>
          <dt>优惠券</dt>
          <dd>你当前有<span>2</span>张优惠券</dd>
        </dl>
      </div>

      <FixedBtm>
        <div className={styles.checkout}>
          { (totals.totalPrice > discount && discount > 0) ?
            <>
              <div className={styles.discount}>
                -￥{discount}
              </div>
              <div className={styles.total}>
                Total: <i>￥{totals.discountPrice}</i>
              </div>
            </> :
            <div className={styles.total}>
              Total: <i>￥{totals.totalPrice}</i>
            </div>
          }

          <CheckBtn action={order}>Checkout</CheckBtn>
        </div>
      </FixedBtm>
    </>
  );
}