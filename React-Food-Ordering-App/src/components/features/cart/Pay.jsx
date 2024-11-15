import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../layouts/Header";
import { CartContext } from "../../../store/CartContext";
import useCountdown from "./hooks/useCountdown";
import styles from "./Order.module.css";
import ConfirmBtn from "../../UI/ConfirmBtn";
import FixedBtm from "../../layouts/FixedBtm";

export default function Pay() {
  const {totals, discount} = useContext(CartContext);
  const timeLeft = useCountdown();

  const navigate = useNavigate();
  const pay = () => {
    navigate("/cart/checkout/complete");
  }

  return (
    <>
      <Header title="Pay" />

      <section className={styles.orderResult}>
        <div className={`${styles.countdown} ${styles.focus}`}>
          <div className={styles.timeIcon}>
            </div>支付剩余时间：<span>{parseInt(timeLeft/60)}</span>分<span>{timeLeft%60}</span>秒
        </div>
      </section>

      <div className={styles.tit}>结算信息</div>  
      <div className={styles.orderDes}>
        <dl>
          <dt>结算信息</dt>
          <dd>12333164964</dd>
        </dl>
        <dl>
          <dt>交易金额</dt>
          <dd>
          ￥{
              (totals.totalPrice > discount && discount > 0) ? totals.discountPrice : totals.totalPrice
            }
          </dd>
        </dl>
        <dl>
          <dt>还需支付</dt>
          <dd>
            ￥{
              (totals.totalPrice > discount && discount > 0) ? totals.discountPrice : totals.totalPrice
            }
          </dd>
        </dl>
      </div>

      <div className={styles.tit}>选择支付方式</div>
      <div className={`${styles.orderDes} ${styles.payMethod}`}>
        <dl>
          <dt>
            <div className={styles.wechatIcon}></div>微信支付
          </dt>
          <dd>
            <input type="radio" name="paymethod" value="1" id="wechat" />
            <label htmlFor="wechat"></label>
          </dd>
        </dl>
        <dl>
          <dt><div className={styles.balanceIcon}></div>余额支付</dt>
          <dd>
            <span className={styles.balance}>可用余额: balance</span>
            <input type="radio" name="paymethod" value="2" id="balance" />
            <label htmlFor="balance"></label>
          </dd>
        </dl>
      </div> 

      <FixedBtm>
        <ConfirmBtn action={pay}>Pay</ConfirmBtn>
      </FixedBtm>
    </>
  );
}