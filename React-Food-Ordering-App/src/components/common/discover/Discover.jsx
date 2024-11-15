import { Link } from "react-router-dom";

import Header from "../../layouts/Header";
import styles from "./Discover.module.css";

export default function Discover() {
  return (
    <>
      <Header title="Discover" />

      <section className={styles.discoverOptions}>
          <Link to="/discover/join">申请加盟</Link>
          <Link to="/discover/about-us" className={styles.intro}>包师傅简介</Link>
          <Link to="/discover/safety" className={styles.safety}>食品安全</Link>
          <Link to="/" className={styles.share}>分享好友</Link>
      </section>
    </>
  );
}