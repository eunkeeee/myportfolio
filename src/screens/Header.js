import styles from "./Header.module.css";
import NavigationBar from "../components/NavigationBar";
import { useState } from "react";
import useWindowDimensions from "../functions/useWindowDimensions";

const Header = () => {
  const [menu, setMenu] = useState(true);
  const [isWhite, setWhite] = useState(false);
  const onResize = () => {
    const { innerWidth: width, innerHeight: height } = window;
    if (width < 768) {
      setMenu(false);
    } else {
      setMenu(true);
    }
  };
  window.addEventListener("resize", onResize);

  const onScroll = () => {};
  return (
    <div>
      <header className={styles.Header} onScroll={onScroll}>
        <div className={styles.content}>
          <a href="#top">
            <div className={styles.title}>CEK's Portfolio</div>
          </a>
          {menu ? <NavigationBar /> : null}

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
