import { Link } from "react-router-dom";
import Header from "../../layouts/Header";

export default function Discover() {
  return (
    <>
      <Header title="Discover" />
      <section id="discover-wrapper">
          <div className="options">
              <Link to="/discover/join">申请加盟</Link>
              <Link to="/discover/about-us" id="intro">包师傅简介</Link>
              <Link to="/discover/safety" id="safety">食品安全</Link>
              <Link to="/" id="share">分享好友</Link>
          </div>
      </section>
    </>
  );
}