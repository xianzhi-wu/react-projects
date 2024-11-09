import Header from "../../layouts/Header";

import { useContext } from "react";
import { CartContext } from "../../../store/CartContext";
import { Link } from "react-router-dom";
import { useCartTotalPrice } from "./hooks/useCartContext";
import useCountdown from "./hooks/useCountdown";

export default function Pay() {
  const cartCtx = useContext(CartContext);

  const cartTotalPrice = useCartTotalPrice(cartCtx);
  const timeLeft = useCountdown();

  return (
    <>
      <Header title="Pay" />

      <section id="orderResult">
          <input id="countSeconds" type="hidden" value="900"/>
          <div id="order-state" className="time">
            支付剩余时间：<span id="minute">{parseInt(timeLeft/60)}</span> 分 <span id="second">{timeLeft%60}</span> 秒
          </div>
      </section>
      <section className="orderCont payInfo">
          <div className="tit">结算信息</div>
          <div className="box-layout">
            <div className="label">订单号</div>
            <div className="box-col">$orderNo</div>
          </div>
          <div className="box-layout">
            <div className="label">交易金额</div>
            <div className="box-col" id="uprice">${((cartTotalPrice - 500) / 100).toFixed(2)}</div>
          </div>
          <div className="box-layout">
            <div className="label">还需支付</div>
            <div className="box-col">price</div>
          </div>
      </section>
      <section className="orderCont payInfo" id="payType">
          <div className="tit">选择支付方式</div>
          <div className="box-layout" id="wechat-pay">
            <div className="label box-col">微信支付</div><div className="choose active"></div>
          </div>
          <div className="box-layout" id="balance-pay">
            <div className="label">余额支付</div>
            <div className="box-col" id="money">可用余额:balance</div>
            <div className="choose"></div>
          </div>
      </section>
      <div className="tipLayer cover hide" id="tip01">
          <div className="uiLayer">
            <div className="uiTitle">温馨提示</div>
            <div className="cont">您刚刚提交了一个订单，是否继续支付？</div>
            <div className="btns">
                <a id="cancelBtn">取消订单</a>
                <a className="confirmBtn" id="continue">继续支付</a>
            </div>
          </div>
      </div>
      <Link id="postInf" to="/cart/checkout/complete">Pay</Link>
    </>
  );
}