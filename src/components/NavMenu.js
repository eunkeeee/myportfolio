import styles from "./NavMenu.module.css";

export const NavMenu = ({ background, text, index }) => {
  const transparentWhite = "hsla(0, 0%, 100%, 0.7)";
  const backgroundMenuColor = "#334A52";

  const onClick = () => {
    const navBarHeight = 80;
    const aboutMeHeight = document.querySelector("#section-AboutMe").offsetTop;
    const skillsHeight = document.querySelector("#section-Skills").offsetTop;
    const ArchivingHeight =
      document.querySelector("#section-Archiving").offsetTop;
    const ProjectHeight = document.querySelector("#section-Project").offsetTop;
    const elementsHeight = [
      aboutMeHeight,
      skillsHeight,
      ProjectHeight,
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
