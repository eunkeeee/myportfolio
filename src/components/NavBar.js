import styles from "./NavBar.module.css";
import NavMenu from "./NavMenu";

const NavigationBar = ({ background }) => {
  const transparentWhite = "hsla(0, 0%, 100%, 0.7)";
  const backgroundMenuColor = "#334A52";
  return (
    <div className={styles.menus} id="section-navBar">
      <NavMenu
        text="About Me"
        href="#section-AboutMe"
        background={background}
      />
      <NavMenu text="Skills" href="#section-Skills" background={background} />
      <NavMenu
        text="Archiving"
        href="#section-Archiving"
        background={background}
      />
      <NavMenu text="Project" href="#section-Project" background={background} />
    </div>
  );
};
export default NavigationBar;
