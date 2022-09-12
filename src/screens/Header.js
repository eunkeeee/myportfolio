import styles from "./Header.module.css";
import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import { goToTop } from "../hooks/onPageMove";
import { useMediaQuery } from "react-responsive";

const Header = () => {
  const backgroundLogoColor = "#334A52";
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
      if (window.scrollY > 80) {
        setBackground(true);
      }
    }
  };
  const onScroll = () => {
    if (window.scrollY > 80) {
      setBackground(true);
    } else {
      setBackground(false);
      if (window.innerWidth <= 768) {
        setBackground(true);
      }
    }
  };

  // initialization
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setMenu(false);
      setBackground(true);
    }
  }, []);

  window.addEventListener("resize", onResize);
  window.addEventListener("scroll", onScroll);

  return (
    <div>
      <header
        className={`${styles.Header} ${background ? styles.drop : ""}`}
        style={{ backgroundColor: `${background ? "white" : "transparent"}` }}
      >
        <div className={styles.content}>
          <div
            onClick={goToTop}
            className={styles.title}
            // 색상 좀 멋진걸로 변경해볼까?
            style={{
              color: `${background ? backgroundLogoColor : "#6ad7f6"}`,
            }}
          >
            은기의 포트폴리오.
          </div>

          {menu ? (
            <NavBar
              background={background}
              onClick={() => {
                setMenu(false);
              }}
            />
          ) : null}

          <a
            // href="#"
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
