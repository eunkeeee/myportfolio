import styles from "./Header.module.css";
import { useState, useRef } from "react";

const Header = ({ onClick }) => {
  const listElement = useRef(null);
  // console.log(menus);
  const [isLargeEnough, setLargeEnough] = useState();
  const onResize = () => {
    if (window.innerWidth < 1100) {
      setLargeEnough(false);
    } else {
      setLargeEnough(true);
    }
  };

  // window.addEventListener("resize", onResize);
  // const media = window.matchMedia(useMediaQuery);
  // matchMedia("screen and (max-width: 1100px)");
  // const [whiteHeader, setWhite] = useState(false);
  // window.addEventListener("scroll", () => {
  //   if (window.scrollY > 80) {
  //     setWhite(true);
  //   }
  // });

  return (
    <div>
      <header className={styles.Header} onClick={onClick}>
        <div className={styles.content}>
          <a href="#top">
            <div className={styles.title}>CEK's Portfolio</div>
          </a>

          <div className={styles.navigation__menus}>
            {/* Navigation Bar */}
            <div className={styles.navigation__menu}>
              <a href="#AboutMe">About Me</a>
            </div>
            <div className={styles.navigation__menu}>
              <a href="#Skills">Skills</a>
            </div>
            <div className={styles.navigation__menu}>
              <a href="#Archiving">Archiving</a>
            </div>
            <div className={styles.navigation__menu}>
              <a href="#Projects">Projects</a>
            </div>
            {/* <div className={styles.navigation__menu}>
                <a href="#AboutMe">Career</a>
              </div> */}
          </div>

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
