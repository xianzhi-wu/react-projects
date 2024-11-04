import styles from './MainHeader.module.css';

export default function MainHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}></div>
      <a className={`single-line ${styles.address}`}>点击手动输入收餐地址</a>
      <div className={`${styles.time} ${styles.tomorrow}`}>今日晚餐</div>
    </header>
  );
}