import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Menu.module.css';

export default function Menu() {
  const [displayMenu, setDisplayMenu] = useState(false);

  const toggleMenu = (event) => {
    event.stopPropagation();
    setDisplayMenu(prevState => !prevState);
  }

  useEffect(() => {
    const hideMenu = () => {
      setDisplayMenu(prevState => {
        if (prevState) {
          return false;
        }
      });
    };

    document.addEventListener("click", hideMenu)

    return () => {
      document.removeEventListener("click", hideMenu);
    }
  }, []);

  return (
    <div className={`${styles.menu} ${displayMenu ? styles.active : ''}`} onClick={toggleMenu}>
      <div className={styles.menuIcon}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.text}></div>
      </div>
    
      <div className={styles.menuList}>
        <Link to="/">Home</Link>
        <Link to="discover">Discover</Link>
        <Link to="my-account">My Account</Link>
      </div>
    </div>
  );
}