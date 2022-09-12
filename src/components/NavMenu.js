import styles from "./NavMenu.module.css";

const NavMenu = ({ background, href, text }) => {
  const transparentWhite = "hsla(0, 0%, 100%, 0.7)";
  const backgroundMenuColor = "#334A52";

  const onClick = () => {
    const navBarHeight = document.querySelector("#section-navBar").offsetTop;
    const topHeight = 0;
    const aboutMeHeight = document.querySelector("#section-AboutMe").offsetTop;
    const skillsHeight = document.querySelector("#section-Skills").offsetTop;
    const ArchivingHeight =
      document.querySelector("#section-Archiving").offsetTop;
    const ProjectHeight = document.querySelector("#section-Project").offsetTop;
    const elementHeight = document.querySelector("#section-AboutMe").offsetTop;

    window.scrollTo({ top: elementHeight - navBarHeight, behavior: "smooth" });
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

export default NavMenu;
