import Header from "../layouts/Header";

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
                    <a href="${basePath}/order/balance" className="box-col"><span>余额</span></a>
                    <a href="${basePath}/jsp/couponsList.jsp" className="box-col">${user.couponsCount}张<span>优惠券</span></a>
                    <a href="${basePath}/jsp/collectList.jsp" className="box-col">${user.collectCount}<span>收藏</span></a>
                </div>
            </header>
            <div className="user-info2 box-layout">
                <a className="box-col">${user.payment}<br/>待付款</a>
                <a className="box-col">${user.send}<br/>待派送</a>
                <a className="box-col">${user.recipient}<br/>待收货</a>
                <a className="box-col">${user.rated}<br/>待评价</a>
            </div>
            <div className="user-bars">
                <a href="${basePath}/jsp/addressList.jsp" id="addr">收餐地址</a>
                <a href="${basePath}/jsp/orderList.jsp?status=5" id="orders">我的订单</a>
                <a href="${basePath}/jsp/help-center.jsp" id="help">帮助中心</a>
            </div>
        </section>
    </>
  );
}