import Header from "../../../layouts/Header";
import FixedBtm from "../../../layouts/FixedBtm";
import ConfirmBtn from "../../../UI/ConfirmBtn";
import LinkBtn from "../../../UI/LinkBtn";
import formStyles from "../../../../../src/FormFields.module.css";

export default function Apply() {
  return (
    <>
      <Header title="Apply" />

      <form className={`${formStyles.form} ${formStyles.applyJoin}`}>
          <dl className={formStyles.name}>
              <dt>姓名</dt>
              <dd>
                <input type="text" name="name" id="name" placeholder="申请人姓名" />
              </dd>
          </dl>
          <dl className={formStyles.phone}>
              <dt>手机号码</dt>
              <dd>
                <input type="text" name="phone" id="phone" placeholder="申请人手机号码" />
              </dd>
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
          <dl>
              <dt>拥有资源</dt>
              <dd>
                <textarea name="resource" id="resource" placeholder="自身拥有哪些开店的资源"></textarea>
              </dd>
          </dl>
          <dl>
              <dt>缺失资源</dt>
              <dd>
                <textarea name="res" id="res" placeholder="自身缺失哪些资源，包师傅会为您牵线搭桥"></textarea>
              </dd>
          </dl>
      </form>

      <FixedBtm $flex="true">
        <LinkBtn to="/discover/join/records">记录</LinkBtn>
        <ConfirmBtn>提交</ConfirmBtn>
      </FixedBtm>
    </>
  );
}