import { Link } from "react-router-dom";

import Header from "../../../layouts/Header";
import joinImage from "../../../../assets/images/join.jpg";

export default function Join() {
  return (
    <>
      <Header title="Join" />
      <img src={joinImage} alt="加盟" />
      <div className="fixed-btm">
        <Link to="/discover/join/apply" className="applyBtn">申请</Link>
      </div>
    </>
  );
}