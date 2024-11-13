import { Link } from "react-router-dom";
import Header from "../../../layouts/Header";

export default function Help() {
  return (
    <>
      <Header title="帮助中心" />
      <div className="help-type box-layout">
          <a href="" className="box-col" id="hotline">客服热线</a>
          <a href="" className="box-col" id="service">在线客服</a>
          <Link className="box-col" id="feedback-icon" to="/my-account/help/feedback">意见反馈</Link>
      </div>
      <div className="help-option">
          <div className="tit">常见问题</div>
          <Link to="/my-account/help/ordering">下单问题</Link>
          <Link to="/my-account/help/paying">支付问题</Link>
          <Link to="/my-account/help/cooking">烹饪问题</Link>
      </div>
    </>
  );
}