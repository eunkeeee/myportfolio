import styles from "./NavigationBar.module.css";
const NavigationBar = () => {
  return (
    <div className={styles.menus}>
      {/* Navigation Bar */}
      <div>
        <a className={styles.menu} href="#AboutMe">
          About Me
        </a>
      </div>
      <div>
        <a className={styles.menu} href="#Skills">
          Skills
        </a>
      </div>
      <div>
        <a className={styles.menu} href="#Archiving">
          Archiving
        </a>
      </div>
      <div>
        <a className={styles.menu} href="#Projects">
          Projects
        </a>
      </div>
      {/* <div >
      <a href="className={styles.menu} #AboutMe">Career</a>
    </div> */}
    </div>
  );
};
export default NavigationBar;
