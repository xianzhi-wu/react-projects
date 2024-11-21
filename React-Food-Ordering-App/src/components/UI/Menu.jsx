import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import styles from './Menu.module.css';
import debounce from '../../utils/debounce';

export default function Menu({ theme }) {
  const [displayMenu, setDisplayMenu] = useState(false);

  const toggleMenu = (event) => {
    event.stopPropagation();
    
    setDisplayMenu((prevState) => {
      const newState = !prevState;
      hideBody(newState);
      return newState;
    });
  };  

  const hideBody = (hide) => {
    if (hide) {
      document.body.style.overflow = "hidden"; 
    } else {
      //if (document.body.style.overflow) {
      document.body.style.overflow = "";
      //}
      
      // if (document.body.getAttribute("style") === "") {
      //   document.body.removeAttribute("style");
      // }
    }
  }

  useEffect(() => {
    const hideMenu = () => {
      setDisplayMenu(prevState => {
        if (prevState) {
          return false;
        }
      });
    };

    const handleResize = debounce(() => {
      if (window.innerWidth > 640) {
        document.addEventListener("click", hideMenu);
      } else {
        document.removeEventListener("click", hideMenu);
      }
    }, 300);

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("click", hideMenu);
      document.body.style.overflow = "";
    };
  }, []);

  const links = [
    { to: "/", text: "Home" },
    { to: "/discover", text: "Discover" },
    { to: "/my-account", text: "My Account" },
  ];

  const handleLinkClick = () => {
    hideBody(false);
    //setDisplayMenu(false);
  }

  return (
    <>
      <div
        className={`
          ${styles.menu} 
          ${displayMenu ? styles.active : ''} 
          ${theme === "blue" &&  styles.blue}
        `} 
        onClick={toggleMenu}
      >
        <div className={styles.menuIcon}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.text}></div>
        </div>

        <div 
          className={styles.menuList}
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the menu
        >
          {links.map((link, index) => (
            <Link 
              key={index} 
              to={link.to} 
              onClick={handleLinkClick}
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}