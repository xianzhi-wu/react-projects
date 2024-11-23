import Header from "../../layouts/Header"
import FixedBtm from "../../layouts/FixedBtm";
import ConfirmBtn from "../../UI/ConfirmBtn";
import formStyles from "../../../../src/FormFields.module.css";

export default function AddAddress() {
  return (
    <>
      <Header title="新增收餐地址" />

      <form className={formStyles.form}>
        <dl className={formStyles.editAddr}>
          <dt>联&ensp;系&ensp;人</dt>
          <dd>
            <input type="text" name="name" className={formStyles.userName} placeholder="您的姓名" />
          </dd>
          <label id="fradio" className={formStyles.radio}>
            <em className={formStyles.on}>女士</em><em>先生</em>
          </label>
        </dl>

        <dl className={formStyles.addr}>
          <dt>所在位置</dt>
          <dd>
            <input className={formStyles.addr01} name="addrSelect" placeholder="学校、写字楼、小区、街道" readOnly />
          </dd>
          <dd>
            <input type="text" name="addrDetail" placeholder="公司名、门牌号等详细信息"/>
          </dd>
        </dl>
      </form>
      
      <FixedBtm>
        <ConfirmBtn>提&emsp;交</ConfirmBtn>
      </FixedBtm>
    </>
  );
}