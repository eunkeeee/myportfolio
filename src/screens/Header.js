import styles from "./Header.module.css";
import NavigationBar from "../components/NavigationBar";
import { useState } from "react";
import useWindowDimensions from "../functions/useWindowDimensions";

const Header = () => {
  const [menu, setMenu] = useState(true);
  const [background, setBackground] = useState(false);
  const onResize = () => {
    const { innerWidth: width, innerHeight: height } = window;
    if (width < 768) {
      setMenu(false);
    } else {
      setMenu(true);
    }
  };
  window.addEventListener("resize", onResize);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
      setBackground(true);
    } else {
      setBackground(false);
    }
  });
  return (
    <div>
      <header
        className={styles.Header}
        style={{ backgroundColor: `${background ? "white" : "transparent"}` }}
      >
        <div className={styles.content}>
          <a href="#top">
            <div
              className={styles.title}
              style={{ color: `${background ? "black" : "#6ad7f6"}` }}
            >
              CEK's Portfolio
            </div>
          </a>
          {menu ? <NavigationBar background={background} /> : null}

          <a
            href="#"
            className={styles.toggleBtn}
            onClick={() => {
              setMenu((current) => !current);
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
