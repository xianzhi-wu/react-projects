import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../store/CartContext";

import Header from "../../layouts/Header";
import useCountdown from "./hooks/useCountdown";
import FixedBtm from "../../layouts/FixedBtm";
import ConfirmBtn from "../../UI/ConfirmBtn";

import styles from "./Order.module.css";

export default function Order() {
  const {totals, discount} = useContext(CartContext);
  const timeLeft = useCountdown();

  const navigate = useNavigate();

  const toPay = () => {
    navigate("/cart/checkout/pay");
  }

  return (
    <>
      <Header title="Order Detail" />

      <section className={styles.orderResult}>
        <div className={styles.orderState}>
          订单已提交，等待付款
          <span>
            {
              (totals.totalPrice > discount && discount > 0) ? totals.discountPrice : totals.totalPrice
            }
          </span>元
        </div>
        <div className={styles.countdown}>
          支付剩余时间：<span>{parseInt(timeLeft/60)}</span>分<span>{timeLeft%60}</span>秒
        </div>
      </section>

      <div className={styles.tit}>菜品信息</div>
      <div className={styles.orderDes}>
        <dl>
          <dt>麻婆豆腐</dt>
          <dd>x2</dd>
          <dd>￥36</dd>
        </dl>
        <dl>
          <dt>总计</dt>
          <dd>￥36</dd>
        </dl>
      </div>
      
      <div className={styles.tit}>菜品信息</div>
      <div className={`${styles.orderDes} ${styles.mb12}`}>
        <dl>
          <dt>订单编号</dt>
          <dd>89757</dd>
        </dl>
        <dl>
          <dt>下单时间</dt>
          <dd>今日08：30</dd>
        </dl>
        <dl>
          <dt>支付方式</dt>
          <dd>在线支付</dd>
        </dl>
        <dl>
          <dt>收餐姓名</dt>
          <dd>wxz</dd>
        </dl>
        <dl>
          <dt>收餐电话</dt>
          <dd>1465161651</dd>
        </dl>
        <dl>
          <dt>收餐地址</dt>
          <dd>深圳宝安</dd>
        </dl>
      </div>
      
      <FixedBtm>
        <ConfirmBtn action={toPay}>付款</ConfirmBtn>
      </FixedBtm>
    </>
  );
}