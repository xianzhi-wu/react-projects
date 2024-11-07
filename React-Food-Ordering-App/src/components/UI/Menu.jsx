import { useState } from 'react';
import styles from './Menu.module.css';

export default function Menu() {
  const [displayMenu, setDisplayMenu] = useState(false);

  const toggleMenu = () => {
    setDisplayMenu(prevState => !prevState);
  }

  return (
    <div className={`${styles["menu"]} ${displayMenu ? styles["active"] : ''}`} onClick={toggleMenu}>
      <div className={styles["menu-icon"]}>
        <div className={styles["bar"]}></div>
        <div className={styles["bar"]}></div>
        <div className={styles["bar"]}></div>
        <div className={styles.text}></div>
      </div>
    
      <div className={styles["menu-list"]}>
        <a href="#" className={styles["menu-item"]}>Discover</a>
        <a href="#" className={styles["menu-item"]}>My Account</a>
      </div>
    </div>
  );
}