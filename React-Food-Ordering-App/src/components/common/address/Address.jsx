import Header from "../../layouts/Header";
import { Link } from "react-router-dom";

export default function Address() {
  return (
    <>
      <Header title="收餐地址" />

      <a className="addr-bar single-line" id="curLoc">获取位置失败</a>
      <div className="addr-tip">我的收餐地址</div>
      <div id="addr-list">                  
        <div className="li">          
          <a className="addr-bar" href="${basePath}/products/index?id=">              
            <div className="name">周杰伦</div>              
            <div className="address single-line">广东省深圳市南山区中科大厦11楼</div>          
          </a>          
          <i className="arrow"></i>          
          <div className="option">              
            <a className="delete">删除</a>              
            <a href="add-addr.html" className="edit">修改</a>          
          </div>      
        </div> 
        <div className="li">          
          <a className="addr-bar" href="${basePath}/products/index?id=">              
            <div className="name">周杰伦</div>              
            <div className="address single-line">广东省深圳市南山区中科大厦11楼</div>          
          </a>          
          <i className="arrow"></i>          
          <div className="option">              
            <a className="delete">删除</a>              
            <a href="add-addr.html" className="edit">修改</a>          
          </div>      
        </div> 
      </div>                
      <div className="box-layout" style={{position:"fixed",bottom:0,left:0,right:0}}>
          <Link className="addr-bar box-col" id="add" to="/address/add">新增收餐地址</Link>
          <div id="scan-code">团餐入口</div>
      </div>
    </>
  );
}