import { Link } from "react-router-dom";
import Header from "../../layouts/Header";
import useCountdown from "./hooks/useCountdown";

export default function Order() {
  const timeLeft = useCountdown();

  return (
    <>
      <Header title="Order Detail" />

      <section id="orderResult">
        <div id="order-state">订单已提交，等待付款<span>36</span>元</div>
        <div id="order-tip">支付剩余时间：<span>{parseInt(timeLeft/60)}</span>分<span>{timeLeft%60}</span>秒</div>
    </section>
    
    <section id="foodInfo">
        <div className="tit">菜品信息</div>
        <div className="box-layout"><div className="box-col single-line">麻婆豆腐</div><div className="amount">x2</div><div className="pay">￥36</div></div>
        <div className="box-layout"><div className="box-col single-line">麻婆豆腐</div><div className="amount">x2</div><div className="pay">￥36</div></div>
        <div className="box-layout"><div className="box-col">总计</div><div className="pay">￥72</div></div>
    </section>
    
    <section className="orderCont">
        <div className="tit">菜品信息</div>
        <div className="box-layout"><div className="label">订单编号</div><div className="box-col">89757</div></div>
        <div className="box-layout"><div className="label">下单时间</div><div className="box-col">今日08：30</div></div>
        <div className="box-layout"><div className="label">支付方式</div><div className="box-col">在线支付</div></div>
        <div className="box-layout"><div className="label">收餐姓名</div><div className="box-col">wxz</div></div>
        <div className="box-layout"><div className="label">收餐电话</div><div className="box-col">1465161651</div></div>
        <div className="box-layout"><div className="label">收餐地址</div><div className="box-col single-line">深圳宝安</div></div>
    </section>
    
    <div className="fixed-btm">
        <Link className="orderBtn" to="/cart/checkout/pay">付款</Link>
    </div>
    </>
  );
}