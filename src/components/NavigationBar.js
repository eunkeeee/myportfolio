import styles from "./NavigationBar.module.css";
const NavigationBar = ({ background }) => {
  const transparentWhite = "hsla(0, 0%, 100%, 0.7)";
  return (
    <div className={styles.menus}>
      {/* Navigation Bar */}
      <div>
        <a
          className={styles.menu}
          style={{
            color: `${background ? "black" : transparentWhite}`,
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
            color: `${background ? "black" : transparentWhite}`,
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
            color: `${background ? "black" : transparentWhite}`,
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
            color: `${background ? "black" : transparentWhite}`,
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
