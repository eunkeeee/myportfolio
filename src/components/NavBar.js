import styles from "./NavBar.module.css";
import { NavMenu } from "./NavMenu";

const NavBar = ({ background, onClick }) => {
  return (
    <div className={styles.menus} id="section-navBar" onClick={onClick}>
      <NavMenu
        index={0}
        text="자기소개"
        href="#section-AboutMe"
        background={background}
      />
      <NavMenu
        index={1}
        text="스킬"
        href="#section-Skills"
        background={background}
      />

      <NavMenu
        index={2}
        text="프로젝트"
        href="#section-Project"
        background={background}
      />
      <NavMenu
        index={3}
        text="연락처"
        href="#section-Archiving"
        background={background}
      />
    </div>
  );
};
export default NavBar;
