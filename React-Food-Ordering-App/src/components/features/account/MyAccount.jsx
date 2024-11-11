import Header from "../../layouts/Header";
import { Link } from "react-router-dom";

export default function MyAccount() {
  const user = {};

  return (
    <>
        <Header title="My Account" />
        <section id="ucenter">
            <header className="header">
                <div className="user-img"></div>
                <div className="userName">${user.nickname}</div>
                <div className="user-info1 box-layout">
                    <Link className="box-col" to="/my-account/balance">200<span>余额</span></Link>
                    <Link className="box-col" to="/my-account/coupons">2张<span>优惠券</span></Link>
                    <Link className="box-col" to="/my-account/favorites">1<span>收藏</span></Link>
                </div>
            </header>
            <div className="user-info2 box-layout">
                <Link to="/my-account/orders" className="box-col">${user.payment}<br/>待付款</Link>
                <Link to="/my-account/orders" className="box-col">${user.send}<br/>待派送</Link>
                <Link to="/my-account/orders" className="box-col">${user.recipient}<br/>待收货</Link>
                <Link to="/my-account/to-be-reviewed" className="box-col">${user.rated}<br/>待评价</Link>
            </div>
            <div className="user-bars">
                <Link to="/address" id="addr">收餐地址</Link>
                <Link to="/my-account/orders" id="orders">我的订单</Link>
                <Link to="/my-account/reviews" id="orders">我的评价</Link>
                <Link to="/my-account/help" id="help">帮助中心</Link>
            </div>
        </section>
    </>
  );
}