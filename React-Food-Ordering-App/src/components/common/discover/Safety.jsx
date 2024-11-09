import Header from "../../layouts/Header";
import safetyImage from "../../../assets/images/safety.jpg";

export default function Safety() {
  return (
    <>
      <Header title="Safty" />
      <div id="food-safety">
        <img src={safetyImage} />
      </div>
    </>
  );
}