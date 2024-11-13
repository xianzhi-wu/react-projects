import styles from "./CartBtns.module.css";

export default function AddItem({ onAdd }) {
  return (
    <button className={`${styles.cartBtn} ${styles.add}`} onClick={onAdd}></button>
  );
}