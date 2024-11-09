import Header from "../../../layouts/Header";

export default function ApplicationRecords() {
  return (
    <>
      <Header title="Application Records" />

      {/* <div className="no-result">暂无申请记录</div> */}
      <div className="apply-list">		
          <div className="box-layout center-v">
            <div className="box-col">
                <div className="name">wxz<span>1111111111</span></div>
                <div className="address">广东省深圳市南山区高新园</div>
                <div className="date">2024-10-11申请</div>
            </div>
            <div className="pass"></div>
          </div>
        {/* <div className="reply">
          <span>申请通过</span>
        </div> */}
      </div>
      <div className="apply-list">		
          <div className="box-layout center-v">
            <div className="box-col">
                <div className="name">wxz<span>1111111111</span></div>
                <div className="address">广东省深圳市南山区高新园</div>
                <div className="date">2024-10-11申请</div>
            </div>
            <div className="pass"></div>
          </div>
        {/* <div className="reply">
          <span>申请通过</span>
        </div> */}
      </div>
    </>
  );
}