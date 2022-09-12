import styles from "./NavBar.module.css";
import NavMenu from "./NavMenu";

const NavigationBar = ({ background }) => {
  const transparentWhite = "hsla(0, 0%, 100%, 0.7)";
  const backgroundMenuColor = "#334A52";
  return (
    <div className={styles.menus} id="section-navBar">
      <NavMenu
        index={0}
        text="About Me"
        href="#section-AboutMe"
        background={background}
      />
      <NavMenu
        index={1}
        text="Skills"
        href="#section-Skills"
        background={background}
      />
      <NavMenu
        index={2}
        text="Archiving"
        href="#section-Archiving"
        background={background}
      />
      <NavMenu
        index={3}
        text="Project"
        href="#section-Project"
        background={background}
      />
    </div>
  );
};
export default NavigationBar;
