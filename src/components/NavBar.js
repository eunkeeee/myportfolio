import styles from "./NavBar.module.css";
import NavMenu from "./NavMenu";

const NavigationBar = ({ background }) => {
  const transparentWhite = "hsla(0, 0%, 100%, 0.7)";
  const backgroundMenuColor = "#334A52";
  return (
    <div className={styles.menus}>
      <NavMenu text="About Me" href="#AboutMe" background={background} />
      <NavMenu text="Skills" href="#Skills" background={background} />
      <NavMenu text="Archiving" href="#Archiving" background={background} />
      <NavMenu text="Projects" href="#Projects" background={background} />
    </div>
  );
};
export default NavigationBar;
