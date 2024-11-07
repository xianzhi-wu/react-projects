import Header from "../../layouts/Header";

import { useContext } from "react";
import { CartContext } from "../../../store/CartContext";

export default function Checkout() {
  const cartCtx = useContext(CartContext);

  const cartTotalPrice = cartCtx.items.reduce((total, item) => {
    return total + item.price * 100 * item.amount;
  }, 0);

  return (
    <>
      <Header title="确认订单" />

      <div className="page-content">
				<a href="" id="defaultAddr">
					<div className="name">wux</div>
					<div className="address">收餐地址：中科大厦</div>
				</a>

				<div id="orderPhone">下单手机号<i>12333164964</i><a  className="btn">更换</a></div>

				<div id="orderInfo">
					<p className="tit">订单信息</p>
          {
            cartCtx.items.map(item => (
              <div key={item.id} className="li box-layout center-v">
                  <div className="img" style={{ backgroundImage: `url('./${item.image}')` }}></div>
                  <div className="box-col">
                      <div className="name">{item.name}</div>
                      <div className="box-layout center-v">
                          <div className="box-col price">￥<span>{item.price}</span><i className="type">生</i><input type="hidden" value="0.8" className="favorNum"/></div>
                          <a className="foodop"><i className="reduce"></i><em>1</em><i className="add"></i></a>
                      </div>
                  </div>
              </div>
            ))
          }
				</div>
                
				<div id="orderDetail">
					<dl>
						<dt>配送时间</dt>
						<dd id="timeToggle">
							<p id="deliveryTime">2016/08/26--21:00前送达&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;--(下单截止时间16:30)</p>
							<select name="timeSelect" id="select">
                1001667
                <option value="0" data-id="1001667">2016/08/26--20:00前送达&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;--(下单截止时间19:00)
                </option>
                1001666
                <option value="1" data-id="1001666">2016/08/26--21:00前送达&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;--(下单截止时间20:00)
                </option>
                1001665
                <option value="2" data-id="1001665">2016/08/26--22:00前送达&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;--(下单截止时间21:00)
                </option>
							</select>
						</dd>
					</dl>
          <dl>
            <dt>满减</dt>
            <dd id="mj"><span>-5</span><input type="hidden" id="manjian" value="5" /></dd>
          </dl>
					<dl id="coupons">
						<dt>优惠券</dt>
            <dd>你当前有<span>2</span>张优惠券</dd>
					</dl>
					<dl id="coupon" className="hide">
						<dt id="coupon1"></dt>
						<dd><div className="close"></div></dd>
					</dl>
				</div>
			</div>

      <div className="fixed-btm box-layout center-v" id="miniCart">
        { cartTotalPrice > 1000 ?
          <>
            <div className="discounted">-￥<span>10</span></div>
            <div className="pay box-col">Total: <span className="priceNum">￥<i>￥{((cartTotalPrice - 1000) / 100).toFixed(2)}</i></span></div>
          </> :
          <div className="pay box-col">Total: <span className="priceNum">￥<i>{(cartTotalPrice / 100).toFixed(2)}</i></span></div>
        }
        <input type="submit" id="confirm" value="Order"/>
      </div>
    </>
  );
}