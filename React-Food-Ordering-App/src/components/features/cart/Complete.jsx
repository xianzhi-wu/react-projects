import { useNavigate } from "react-router-dom";

import Header from "../../layouts/Header";
import styles from "./Order.module.css";
import FixedBtm from "../../layouts/FixedBtm";
import ConfirmBtn from "../../UI/ConfirmBtn";

export default function Complete() {
  const navigate = useNavigate();
  const complete = () => {
    navigate("/");
  }

  return (
    <>
      <Header title="Order Completed" />

      <section className={styles.orderResult}>
        <div className={styles.orderState}>订单已提交，等待付款</div>
        预计送达时间3:00
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
        <ConfirmBtn action={complete}>付款</ConfirmBtn>
      </FixedBtm>
    </>
  );
}