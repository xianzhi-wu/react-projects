import styles from './MainHeader.module.css';
import Menu from '../UI/menu';

import { Link } from 'react-router-dom';

export default function MainHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}></div>
      <Link className={`single-line ${styles.address}`} to="/address">
        Drienerlolaan 5, 7522 NB Enschede
      </Link>
      
      <Menu />
    </header>
  );
}