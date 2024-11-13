import Header from "../../layouts/Header";

import { Link } from "react-router-dom";

export default function ToReview() {
  return (
    <>
      <Header />
      <ul id="myOrders">
        <li>
          <div className="cont">
            <div className="time">2015-05-08<span>12:00</span></div>
            <div className="box-layout center-v">
              <div className="box-col"><div className="name">香菇鸡腿饭X2</div><div className="name">香菇鸡腿饭X2</div></div>
              <div className="pay">￥36.00<i className="arrive">已到货</i></div>
            </div>
          </div>
          <div className="box-layout btns"> 
            <Link to="/my-account/review" className="box-col comment">评价</Link>
            <a className="box-col">再来一份</a>
          </div>
          </li>
      </ul>
    </>
  );
}