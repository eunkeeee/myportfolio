import styles from "./Header.module.css";
import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import { goToTop } from "../hooks/onPageMove";
import { useMediaQuery } from "react-responsive";

const Header = () => {
  const [background, setBackground] = useState(false);
  const [menu, setMenu] = useState(true);

  const useScroll = () => {
    const [state, setState] = useState({
      x: 0,
      y: 0,
    });
    const onScroll = () => {
      setState({ y: window.scrollY, x: window.scrollX });
    };
    useEffect(() => {
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return state;
  };

  const isPc = useMediaQuery({
    query: "(min-width:1024px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width:768px) and (max-width:1023px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });
  // console.log(isPc);
  // console.log(isTablet);
  // console.log(isMobile);
  const useBackground = () => {
    const { y } = useScroll();
    if (y < 80 && (isPc || isTablet)) {
      console.log("no background");
      setBackground(false);
    } else {
      console.log("you need background");
      setBackground(true);
    }
  };
  const useMenu = () => {
    if (isPc || isTablet) {
      setMenu(true);
    } else {
      setMenu(false);
    }
  };

  const backgroundLogoColor = "#334A52";

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

          {menu ? <NavBar background={background} /> : null}

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
