import { useNavigate } from "react-router-dom";

import styles from "./Header.module.css";

export default function Header(props) {
  const navigate = useNavigate();

  return (
    <header className={styles.navBar}>
      <div className={styles.back} onClick={() => navigate(-1)}></div>
      {props.title}
    </header>
  );
}