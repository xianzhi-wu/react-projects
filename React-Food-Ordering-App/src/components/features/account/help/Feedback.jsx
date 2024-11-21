import Header from "../../../layouts/Header";

export default function Feedback() {
  return (
    <>
      <Header title="给我们反馈" />

      <textarea id="feedback" placeholder="请输入您的建议"></textarea>
      <div id="feedback-phone">联系电话<input id="phone" placeholder="请输入手机号"/></div>
      {/* <a href="#" id="feedback-link">反馈记录</a> */}
    </>
  );
}