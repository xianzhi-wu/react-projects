import Header from "../../layouts/Header";

export default function Balance() {
  return (
    <>
      <Header title="余额" />
      
      <div id="my-balance">
          我的余额
          <div className="money">200.00</div>
          <i className="shadow"></i>
      </div>
      <div id="deposit">
          <div className="tit">充值</div>
          <div className="fixed-amount box-layout">
              <a className="box-col" data-money="50.00">50元</a>
              <a className="box-col" data-money="100.00">100元</a>
              <a className="box-col" data-money="200.00">200元</a>
          </div>
          <div className="box-layout">
              <input type="text" className="box-col" id="amount" placeholder="手动输入充值金额" />
              <div id="confirm">充值</div>
          </div>
          <div id="record">
              <div className="tit">余额明细</div>
              <ul>
                  <li className="box-layout"><div className="label">订餐消费</div><div className="time">2016-06-08</div><div className="box-col">-16.00</div></li>
                  <li className="box-layout"><div className="label">余额充值</div><div className="time">2016-06-08</div><div className="box-col add">+16.00</div></li>
                  <li className="box-layout"><div className="label">订餐消费</div><div className="time">2016-06-08</div><div className="box-col">-16.00</div></li>
                  <li className="box-layout"><div className="label">余额充值</div><div className="time">2016-06-08</div><div className="box-col add">+16.00</div></li>
              </ul>
          </div>
      </div>
    </>
  );
};