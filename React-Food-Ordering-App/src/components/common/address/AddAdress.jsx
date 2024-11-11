import Header from "../../layouts/Header"

export default function AddAdress() {
  return (
    <>
      <Header title="新增收餐地址" />

      <section id="editAddr" className="dl">
        <div className="dt">联&ensp;系&ensp;人</div>
        <div className="dd">
          <input type="text" name="name" className="userName" placeholder="您的姓名" />
        </div>
        <label id="fradio" className="radio">
          <em className="on">女士</em><em>先生</em>
        </label>
      </section>

      <section id="addrDetail" className="dl">
        <div className="dt">所在位置</div>
        <input className="addrSelect dd" name="addrSelect" placeholder="学校、写字楼、小区、街道" />
        <div className="dd">
          <input type="text" name="addressDetail" className="details" placeholder="公司名、门牌号等详细信息" />
        </div>
      </section>

      <div className="validate-tip"></div>
      <a id="postInf">提&emsp;交</a>
    </>
  );
}