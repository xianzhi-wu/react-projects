import Header from "../../layouts/Header";
import introImage from '../../../assets/images/intro.png';
import styles from "./Discover.module.css";

export default function Intro() {
  return (
    <>
      <Header title="About Us" />

      <div className={styles.discoverPage}>
        <img src={introImage}/>
      </div>
    </>
  );
}