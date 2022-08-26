import styles from "./NavigationBar.module.css";
const NavigationBar = ({ background }) => {
  const transparentWhite = "hsla(0, 0%, 100%, 0.7)";
  const backgroundMenuColor = "#334A52";
  return (
    <div className={styles.menus}>
      {/* Navigation Bar */}
      <div>
        <a
          className={styles.menu}
          style={{
            color: `${background ? backgroundMenuColor : transparentWhite}`,
          }}
          href="#AboutMe"
        >
          About Me
        </a>
      </div>
      <div>
        <a
          className={styles.menu}
          style={{
            color: `${background ? backgroundMenuColor : transparentWhite}`,
          }}
          href="#Skills"
        >
          Skills
        </a>
      </div>
      <div>
        <a
          className={styles.menu}
          style={{
            color: `${background ? backgroundMenuColor : transparentWhite}`,
          }}
          href="#Archiving"
        >
          Archiving
        </a>
      </div>
      <div>
        <a
          className={styles.menu}
          style={{
            color: `${background ? backgroundMenuColor : transparentWhite}`,
          }}
          href="#Projects"
        >
          Projects
        </a>
      </div>
    </div>
  );
};
export default NavigationBar;
