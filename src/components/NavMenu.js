import styles from "./NavMenu.module.css";
import { useMediaQuery } from "react-responsive";

export const NavMenu = ({ background, text, index }) => {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });
  const transparentWhite = "hsla(0, 0%, 100%, 0.7)";
  const backgroundMenuColor = "#334A52";
  const onClick = () => {
    let navBarHeight;
    if (isMobile) {
      navBarHeight = 71.2;
    } else {
      navBarHeight = 80;
    }
    const aboutMeHeight = document.querySelector("#section-AboutMe").offsetTop;
    const skillsHeight = document.querySelector("#section-Skills").offsetTop;
    const ArchivingHeight =
      document.querySelector("#section-Archiving").offsetTop;
    const ProjectHeight = document.querySelector("#section-Project").offsetTop;
    const elementsHeight = [
      aboutMeHeight,
      ProjectHeight,
      skillsHeight,
      ArchivingHeight,
    ];
    const elementHeight = elementsHeight[index];
    window.scrollTo({
      top: elementHeight - navBarHeight,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={styles.menu}
      style={{
        color: `${background ? backgroundMenuColor : transparentWhite}`,
      }}
      onClick={onClick}
    >
      {text}
    </div>
  );
};
