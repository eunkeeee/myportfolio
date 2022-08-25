import styles from "./Header.module.css";
import NavigationBar from "../components/NavigationBar";
import { useState, useRef } from "react";

const Header = ({ onClick }) => {
  const listElement = useRef(null);
  const [isLargeEnough, setLargeEnough] = useState();
  const onResize = () => {
    if (window.innerWidth < 1100) {
      setLargeEnough(false);
    } else {
      setLargeEnough(true);
    }
  };

  return (
    <div>
      <header className={styles.Header} onClick={onClick}>
        <div className={styles.content}>
          <a href="#top">
            <div className={styles.title}>CEK's Portfolio</div>
          </a>
          <NavigationBar />

          <a
            href="#"
            className={styles.toggleBtn}
            onClick={() => {
              const menus = document.querySelector(
                `.${styles.navigation__menus}`
              );
              console.log(menus.classList[0]);
              const realMenus = document.querySelector(menus.classList[0]);
              realMenus.classList.add(".active");
            }}
          >
            <i class="fa-solid fa-bars"></i>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
