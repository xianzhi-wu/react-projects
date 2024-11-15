import { useNavigate } from "react-router-dom";

import Header from "../../../layouts/Header";
import joinImage from "../../../../assets/images/join.jpg";
import FixedBtm from "../../../layouts/FixedBtm";
import ConfirmBtn from "../../../UI/ConfirmBtn";

export default function Join() {
  const navigate = useNavigate();

  const toApply = () => {
    navigate("/discover/join/apply");
  }

  return (
    <>
      <Header title="Join" />

      <img src={joinImage} alt="加盟" />

      <FixedBtm>
        <ConfirmBtn action={toApply}>申请</ConfirmBtn>
      </FixedBtm>
    </>
  );
}