export default function ProductDetail({ product }) {
  return (
    <div className="cover" id="detail">
      <div className="uiLayer up">
          <div className="img" style={{ backgroundImage: `url('./${product.image}')` }}>
              <div className="box-layout info"></div>
              <div className="name box-col"></div>
          </div>
          <div className="cont">
              <div className="box-layout center-v slc">
                <div className="sale">已售3份</div>
                <div className="like box-col">好评 100</div>
                <div className="cook hide">烹饪</div>
              </div>
              <div className="box-layout center-v">
              </div>
          </div>
          <div className="intro-wrapper">
              <div className="sroller">
              </div>
          </div>
          <div className="op box-layout">
          </div>
          <div className="close"></div>
      </div>
    </div>
  );
}