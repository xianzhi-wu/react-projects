import { Link } from "react-router-dom";
import Header from "../../../layouts/Header";

export default function Apply() {
  return (
    <>
      <Header title="Apply" />

      <form id="apply-join">
          <div className="dl name">
              <div className="dt">姓名</div>
              <div className="dd">
                <input type="text" name="name" id="name" placeholder="申请人姓名" />
              </div>
          </div>
          <div className="dl phone">
              <div className="dt">手机号码</div>
              <div className="dd">
                <input type="text" name="phone" id="phone" placeholder="申请人手机号码" />
              </div>
          </div>
          <div id="addrDetail" className="dl">
            <div className="dt">所在位置</div>
            <input className="addrSelect dd" name="addrSelect" placeholder="学校、写字楼、小区、街道" readOnly />
            <div className="dd">
              <input type="text" name="addressDetail" className="details"  placeholder="公司名、门牌号等详细信息"/>
            </div>
          </div>
          <div className="dl">
              <div className="dt">拥有资源</div>
              <div className="dd">
                <textarea name="resource" id="resource" placeholder="自身拥有哪些开店的资源"></textarea>
              </div>
          </div>
          <div className="dl">
              <div className="dt">缺失资源</div>
              <div className="dd">
                <textarea name="res" id="res" placeholder="自身缺失哪些资源，包师傅会为您牵线搭桥"></textarea>
              </div>
          </div>
          <div className="validate-tip"></div>
      </form>

      <div className="fixed-btm box-layout">
        <Link to="/discover/join/records" className="applyBtn record">记录</Link>
        <button className="applyBtn box-col" id="apply">提交</button>
      </div>
    </>
  );
}