import styles from "./NavigationBar.module.css";
const NavigationBar = () => {
  return (
    <div className={styles.menus}>
      {/* Navigation Bar */}
      <div className={styles.menu}>
        <a href="#AboutMe">About Me</a>
      </div>
      <div className={styles.menu}>
        <a href="#Skills">Skills</a>
      </div>
      <div className={styles.menu}>
        <a href="#Archiving">Archiving</a>
      </div>
      <div className={styles.menu}>
        <a href="#Projects">Projects</a>
      </div>
      {/* <div className={styles.menu}>
      <a href="#AboutMe">Career</a>
    </div> */}
    </div>
  );
};
export default NavigationBar;
