import { Link } from "react-router-dom";
import Header from "../../layouts/Header";

export default function Complete() {
  return (
    <>
      <Header title="Order Completed" />
      <section id="orderResult">
        <div id="order-state">订单提交成功，包师傅已接单</div>
        <div id="order-tip">预计送达时间<span id="time">13：00</span></div>
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
        <Link className="orderBtn" to="/">完成</Link>
      </div>
    </>
  );
}