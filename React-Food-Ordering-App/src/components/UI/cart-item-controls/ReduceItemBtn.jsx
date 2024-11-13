import styles from "./CartBtns.module.css";

export default function ReduceItem({ onReduce }) {
  return (
    <button className={`${styles.cartBtn} ${styles.reduce}`} onClick={onReduce}></button>
  );
}