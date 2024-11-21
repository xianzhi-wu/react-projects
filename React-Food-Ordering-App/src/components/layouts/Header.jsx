import { useNavigate } from "react-router-dom";

import styles from "./Header.module.css";
import Menu from "../UI/Menu";

export default function Header(props) {
  const navigate = useNavigate();

  return (
    <header className={styles.navBar}>
      <div className={styles.back} onClick={() => navigate(-1)}></div>
      <div className={styles.centerArea}>
        {props.title}
      </div>
      <Menu />
    </header>
  );
}