import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import styles from './Menu.module.css';

export default function Menu({ theme }) {
  const [displayMenu, setDisplayMenu] = useState(false);

  const toggleMenu = (event) => {
    event.stopPropagation();
    
    setDisplayMenu((prevState) => {
      const newState = !prevState;
      //hideBody(newState);
      return newState;
    });
  };  

  // const hideBody = (state) => {
  //   if (state) {
  //     document.body.style.overflow = "hidden"; 
  //   } else {
  //     if (document.body.style.overflow) {
  //       document.body.style.overflow = "";
  //     }
      
  //     if (document.body.getAttribute("style") === "") {
  //       document.body.removeAttribute("style");
  //     }
  //   }
  // }

  useEffect(() => {
    const hideMenu = () => {
      setDisplayMenu(prevState => {
        if (prevState) {
          return false;
        }
      });
    };

    document.addEventListener("click", hideMenu);

    return () => {
      document.removeEventListener("click", hideMenu);
      document.body.style.overflow = "";
    }
  }, []);

  const links = [
    { to: "/", text: "Home" },
    { to: "/discover", text: "Discover" },
    { to: "/my-account", text: "My Account" },
  ];

  // const handleLinkClick = () => {
  //   hideBody(false);
  //   setDisplayMenu(false);
  // }

  return (
    <>
      <div className={`${styles.menu} ${displayMenu ? styles.active : ''} ${theme === "blue" &&  styles.blue}`} onClick={toggleMenu}>
        <div className={styles.menuIcon}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.text}></div>
        </div>

        <div className={styles.menuList}>
          {links.map((link, index) => (
            <Link 
              key={index} 
              to={link.to} 
              // onClick={handleLinkClick}
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}