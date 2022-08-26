import styles from "./Header.module.css";
import NavigationBar from "../components/NavigationBar";
import { useEffect, useState } from "react";

const Header = () => {
  const backgroundLogoColor = "black";
  const [menu, setMenu] = useState(true);
  const [background, setBackground] = useState(false);
  const onResize = () => {
    const { innerWidth: width, innerHeight: height } = window;
    if (width <= 768) {
      setMenu(false);
      setBackground(true);
    } else {
      setMenu(true);
      setBackground(false);
    }
  };

  // 이게 왜 해결을 한거지?
  useEffect(onResize, [background]);
  window.addEventListener("resize", onResize);
  window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
      setBackground(true);
    } else {
      // if (!menu) {
      //   return setBackground(true);
      // }
      setBackground(false);
    }
  });
  return (
    <div>
      <header
        className={`${styles.Header} ${background ? styles.drop : ""}`}
        style={{ backgroundColor: `${background ? "white" : "transparent"}` }}
      >
        <div className={styles.content}>
          <a href="#top">
            <div
              className={styles.title}
              // 색상 좀 멋진걸로 변경해볼까?
              style={{
                color: `${background ? backgroundLogoColor : "#6ad7f6"}`,
              }}
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
