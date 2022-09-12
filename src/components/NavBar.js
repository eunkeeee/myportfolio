import styles from "./NavBar.module.css";
import { NavMenu } from "./NavMenu";

const NavBar = ({ background, onClick }) => {
  return (
    <div className={styles.menus} id="section-navBar" onClick={onClick}>
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
        text="Project"
        href="#section-Project"
        background={background}
      />
      <NavMenu
        index={3}
        text="Archiving"
        href="#section-Archiving"
        background={background}
      />
    </div>
  );
};
export default NavBar;
