import Header from "../../layouts/Header";
import safetyImage from "../../../assets/images/safety.jpg";
import styles from "./Discover.module.css";

export default function Safety() {
  return (
    <>
      <Header title="Safty" />

      <div className={styles.discoverPage}>
        <img src={safetyImage} />
      </div>
    </>
  );
}