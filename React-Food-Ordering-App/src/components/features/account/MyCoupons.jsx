import Header from "../../layouts/Header";

export default function Coupons() {
  return (
    <>
      <Header title="My Coupons" />

      <div className="coupon-wrapper bg5 box-layout center-v">                    
        <div className="box-col">                        
          <div className="name">消费任意金额可用</div>                        
          <div className="time">有效期至 2016-12-12</div>                    
        </div>                    
        <div className="money">￥<span>5</span>.00</div>                
      </div>                                                                              
      <a className="coupon-wrapper bg5 box-layout center-v">                     
        <div className="box-col">                         
          <div className="name">消费金额满30元可用</div>                         
          <div className="time">有效期至 2016-12-12</div>                         
          <div className="tip">仅限中科店使用</div>                     
        </div>                     
        <div className="money">￥<span>5</span>.00</div>
      </a>                     
    </>
  );
}