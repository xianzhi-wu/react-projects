import Header from "../../layouts/Header";

export default function Orders() {
  return (
    <>
      <Header title="My Orders" />

      <ul id="myOrders">
        <li>
            <div className="cont">
                <div className="time">2015-05-08<span>12:00</span></div>
                <div className="box-layout center-v">
                    <div className="box-col"><div className="name">香菇鸡腿饭X2</div><div className="name">香菇鸡腿饭X2</div></div>
                    <div className="pay">￥36.00<i className="notPay">待付款</i></div>
                </div>
                <div className="tip">支付倒计时：12 分 20 秒</div>
            </div>
            <div className="box-layout btns"> 
                <a className="box-col">查看订单</a>
                <a className="box-col">付款</a>
            </div>
        </li>
        <li>
            <div className="cont">
                <div className="time">2015-05-08<span>12:00</span></div>
                <div className="box-layout center-v">
                    <div className="box-col"><div className="name">香菇鸡腿饭X2</div><div className="name">香菇鸡腿饭X2</div></div>
                    <div className="pay">￥36.00<i className="delivering">派送中</i></div>
                </div>
            </div>
            <div className="box-layout btns"> 
                <a className="box-col">查看订单</a>
                <a className="box-col">催单</a>
            </div>
        </li>
        <li>
            <div className="cont">
                <div className="time">2015-05-08<span>12:00</span></div>
                <div className="box-layout center-v">
                    <div className="box-col"><div className="name">香菇鸡腿饭X2</div><div className="name">香菇鸡腿饭X2</div></div>
                    <div className="pay">￥36.00<i className="cancel">取消</i></div>
                </div>
            </div>
            <div className="box-layout btns"> 
                <a className="box-col">查看订单</a>
                <a className="box-col">再来一份</a>
            </div>
        </li>
        <li>
            <div className="cont">
                <div className="time">2015-05-08<span>12:00</span></div>
                <div className="box-layout center-v">
                    <div className="box-col"><div className="name">香菇鸡腿饭X2</div><div className="name">香菇鸡腿饭X2</div></div>
                    <div className="pay">￥36.00<i className="arrive">已到货</i></div>
                </div>
            </div>
            <div className="box-layout btns"> 
                <a className="box-col comment">评价</a>
                <a className="box-col">再来一份</a>
            </div>
        </li>
      </ul>
    </>
  );
}