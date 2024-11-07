import styles from './MainHeader.module.css';
import Menu from '../UI/menu';

export default function MainHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}></div>
      <a className={`single-line ${styles.address}`}>Drienerlolaan 5, 7522 NB Enschede</a>
      {/* <div className={`${styles.time} ${styles.tomorrow}`}>今日晚餐</div> */}
      <Menu />
    </header>
  );
}