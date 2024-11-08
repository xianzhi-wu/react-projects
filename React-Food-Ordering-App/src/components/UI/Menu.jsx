import { useState } from 'react';
import { Link } from 'react-router-dom';

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
        <Link to="/" className={styles["menu-item"]}>Home</Link>
        <Link to="discover" className={styles["menu-item"]}>Discover</Link>
        <Link to="my-account" className={styles["menu-item"]}>My Account</Link>
      </div>
    </div>
  );
}