import Header from "../../layouts/Header";

export default function Reviews() {
  return (
    <>
      <Header title="My Comments" />

      <div id="comments">
        <div className="scores">
          <i className="star-full"></i>
          <i className="star-full"></i>
          <i className="star-full"></i>
          <i className="star-half"></i>
          <i className="star-empty"></i>8分
        </div>
        <section className="card">
            <div className="cont box-layout">
                <i className="avatar"></i>
                <div className="box-col">
                    <div className="name">完</div>
                    <div className="star"><i className="star5"></i>2015/07/30  14:48</div>
                    <div className="text">很好吃</div>
                </div>
            </div>
        </section>
        <section className="card">
            <div className="cont box-layout">
                <i className="avatar"></i>
                <div className="box-col">
                    <div className="name">倾城</div>
                    <div className="star"><i className="star5"></i>2015/07/30  14:48</div>
                    <div className="text">很好吃</div>
                </div>
            </div>
            <div className="reply"><span>包师傅：</span>感谢</div>
        </section>
    </div>
    </>
  );
}