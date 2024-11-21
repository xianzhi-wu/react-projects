import Header from "../../layouts/Header";
import FixedBtm from "../../layouts/FixedBtm";
import ConfirmBtn from "../../UI/ConfirmBtn";

export default function Review() {
  return (
    <>
      <Header title="Review" />

      <div id="comment-wrapper">
          <div className="section">
              <div className="box-layout"><span>餐品评分</span><div className="grades"><i></i><i></i><i></i><i></i><i></i></div><input type="hidden" name="foodScore" id="foodScore" className="foodScore"/></div>
              <div className="box-layout"><span>餐品评价</span><textarea className="box-col" placeholder="非必填。餐品口味是否满意，量是否够。评分低的餐品包师傅会直接淘汰"></textarea></div>
          </div>
          <div className="section">
              <div className="box-layout"><span>配送评分</span><div className="grades"><i></i><i></i><i></i><i></i><i></i></div><input type="hidden" name="deliveryScore" id="deliveryScore" className="foodScore"/></div>
              <div className="box-layout"><span>配送评价</span><textarea className="box-col" placeholder="非必填。配送速度是否满意、配送态度是否好。评分低的配送站包师傅将终止合作"></textarea></div>
          </div>
      </div>

      <FixedBtm>
        <ConfirmBtn>提&emsp;交</ConfirmBtn>
      </FixedBtm>
    </>
  );
}